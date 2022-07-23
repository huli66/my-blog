import { promises as fsp } from "fs";
import path from "path";
import fm, { FrontMatterResult } from "front-matter";
import { remark } from "remark";
import remarkhtml from "remark-html";
import { formatDate } from "./date";

const fileExt = "md";

/**
 * 获取文件夹相对路径
 * path.isAbsolute 判断路径是否为绝对路径
 * path.resolve 将路径或路径片段解析（拼接）为绝对路径
 * process.cwd 返回 Node 进程的当前工作目录
 * @param dir
 * @returns string 绝对路径
 */
export function absPath(dir: string) {
  return path.isAbsolute(dir) ? dir : path.resolve(process.cwd(), dir);
}

/**
 * 获取文件夹中 markdown 文件名列表，以数组方式返回
 * fs.promises.readdir
 * path.basename 返回 path 的最后一部分（路径指定的文件名称），第二个参数为可选文件扩展名
 * path.extname 返回扩展名 多个返回最后一个，隐藏文件返回空字符串
 * fsPromises.readdir(path[, options]) 默认返回文件名列表
 * @returns ["article_1.md", "article_2.md", ...]
 */
export async function getFileIds(dir = "./") {
  const loc = absPath(dir);
  const files = await fsp.readdir(loc);

  return files
    .filter((fn) => path.extname(fn) === `.${fileExt}`)
    .map((fn) => path.basename(fn, path.extname(fn)));
}

/**
 * front-matter
 * layout 指定要使用的模板样式
 * tags 标签
 * categories
 * permalink
 * keywords 关键词，SEO 优化
 */

interface FrontMatters {
  /** 标题 */
  title: string;
  /** 指定模版 */
  layout: string;
  /** 标签 */
  tags: Array<string>;
  /** 关键词 */
  keywords: Array<string>;
  /** 描述 */
  description: string;
  /** 创建日期 */
  date: string;
}

export interface FileDataProps {
  /** 用文件名作为 id */
  id: string;
  /** 原文档 */
  content: string;
  /** 转化成 HTML 格式 */
  html: string;
  /** 字数 */
  wordCount: string;
  /** 最后修改状态日期 */
  lastDate: string;

  /** 头部信息 */
  /** 标题 */
  title: string;
  /** 指定模版 */
  // layout: string;
  /** 标签 */
  tags: Array<string>;
  /** 关键词 */
  keywords: Array<string>;
  /** 描述 */
  description: string;
  /** 创建日期 */
  date: string;
}

/**
 * 获取单个 Markdown 文件的内容
 * fsPromises.stat 返回一个描述文件的对象，birthtime 文件创建时间戳，ctime 最近一次状态变动时间戳，mtime 修改，atime 访问，加 Ms 毫秒计时（atimeMs）
 * fsPromises.readFile 读取文件的全部内容
 */
export async function getFileData(
  dir = "./",
  id: string
): Promise<FileDataProps> {
  const file = path.join(absPath(dir), `${id}.${fileExt}`);
  const stat = await fsp.stat(file);
  const data = await fsp.readFile(file, "utf8");
  // console.log('data', data); 此时 data 即是编辑的 md 文档的原文，其实可以直接用来展示 md 的

  // NOTICE: // https://segmentfault.com/a/1190000020067490
  const matter = fm<FrontMatters>(data);

  // 解析内容：把 matter 的 body 内容解析成 HTML，再转换成字符串
  const content = matter.body;
  // console.log("content", content);
  const html = (await remark().use(remarkhtml).process(matter.body)).toString();

  // 日期
  const lastDate = formatDate(stat.ctime);

  // 计数
  const roundTo = 10;
  const readPerMin = 200;
  const numFormat = new Intl.NumberFormat("en");
  const count = matter.body
    .replace(/\W/g, " ")
    .replace(/\s+/g, " ")
    .split(" ").length;
  const words = Math.ceil(count / roundTo) * roundTo;
  const mins = Math.ceil(count / readPerMin);

  const wordCount = `本文字数：${numFormat.format(
    words
  )} 字   阅读完需：约 ${numFormat.format(mins)} 分钟`;

  const { date, description, keywords, tags, layout, title } =
    matter.attributes;

  return {
    id,
    content,
    html,
    lastDate,
    wordCount,
    date: formatDate(date),
    description,
    keywords: keywords || null,
    tags: tags || null,
    title,
  };
}

/**
 * 获取文件夹所有文档的数据并过滤排序
 * @param dir
 * @returns
 */
export async function getAllFiles(dir: string) {
  const now = formatDate(new Date().getTime());
  const files = await getFileIds(dir);
  const data = await Promise.allSettled(
    files.map((id) => getFileData(dir, id))
  );

  const result = data
    .map((md) => {
      if (md.status === "fulfilled") {
        const {
          content,
          date,
          lastDate,
          tags,
          html,
          id,
          wordCount,
          keywords,
          description,
          title,
        } = md.value;
        return {
          date,
          tags,
          id,
          keywords,
          description,
          title,
        };
      }
    })
    .filter((a) => a !== undefined);

  // console.log(ret);
  return result;
}
