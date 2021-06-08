//任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行。
async function f() {
	await Promise.reject('error')
	await Promise.resolve('hello')
}

//可以使用如下解决  第一个await放在try...catch结构里面
async function f1() {
	try {
		await Promise.reject('error')
	} catch (error) {
		console.log(error)
	}
	return Promise.resolve('hello')
}

// f1().then((d) => console.log(d))

//第二种使用await后面的 Promise 对象再跟一个catch方法
async function f2() {
	await Promise.reject('error').catch((e) => console.log(e))
	return Promise.resolve('hello')
}
f2().then((d) => console.log(d))
