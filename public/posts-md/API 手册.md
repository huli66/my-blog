# API

## 数据获取

### getInitialProps

`getInitialProps` 使页面可以进行服务端渲染并且允许你进行初始化数据填充，这意味着将会发送带有从服务器填充的数据的页面，有利于 SEO

`getInitialProps` 将禁用自动静态优化

`getInitialProps` 是一个可以作为静态方法被添加到任意页面到 `async`(异步)函数

```js
function Page({ stars }) {
	return <div>Next stars: {stars}</div>
}

Page.getInitialProps = async (ctx) => {
	const res = await fetch('https://api.github.com/repos/vercel/next.js')
	const json = await res.json()
	return { stars: json.stargazers_count }
}

export default Page;
```

```js
import React from 'react'

class Page extends React.Component {
	static getInitialProps (ctx) {
		const res = await fetch('https://api.github.com/repos/vercel/next.js')
		const json = await res.json()
		return { stars: json.stargazers_count }
	}
	render () {
		return <div>Next stars: {this.props.stars}</div>
	}
}

export default Page
```

`getInitialProps` 用来异步获取一下数据，然后填充到 `props`

`getInitialProps` 返回的数据是在服务端渲染时序列化完毕到，类似于 JSON.stringify 到效果，请确保 `getInitialProps` 返回的对象是个普通对象，而不是 Date 、Map 或者 Set

页面初始加载时，`getInitialProps` 函数仅在服务器端运行。当导航路由通过 `next/link` 或 `next/router` 发生变化时也会在客户端运行。然而如果 `getInitialProps` 被用在自定义的 `_app.js` 中，并且导航到实现了 `getServerSideProps` 方法的页面，`getInitialProps` 会在服务器端执行
（*结合自己代码里运行结果重新翻译一下，这段话应该只是想说明一下 getInitialProps 在哪些情况下会在哪个环境执行，However只是对前面对情况作补充，英语不好折腾了半天：_app.js里有getInitialProps时，如果直接初始化，getInitialProps（_app.js里有则执行_app.js里的，没有才执行页面组件的）是在服务端运行，如果通过next/link跳转，那getInitialProps（_app.js里有则执行_app.js里的，没有才执行页面组件的）会在客户端运行，但是如果跳转的页面同时实现了getServerSideProps方法，getInitialProps（_app.js里的）就还是在服务端运行，*）

##### Context Object(上下文对象)

`getInitialProps` 接收一个叫 `context` 的参数，这个对象具有以下属性：

- pathname: 当前路由，相对于 `/pages`
- query: url 参数拼成的对象
- asPath：
- req: HTTP request object
- res: HTTP response object
- err: 错误对象

##### Caveats(注意事项)

`getInitialProps` 函数不能用于子组件里，只能用于每个页面默认导出里

