/**
 * async函数返回一个 Promise 对象。

   async函数内部return语句返回的值，会成为then方法回调函数的参数。
 */
async function f() {
	return 'hello'
}
f().then(
	(v) => console.log('resolve', v),
	(e) => console.log('reject', e)
)

/**
 * async1111函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到。
 */
async function f1() {
	throw new Error('出错了')
}
f1().then(
	(v) => console.log('resolve', v),
	(e) => console.log('reject', e)
)
