// async function getText(file) {
// 	let x = await fetch('https://jsonplaceholder.typicode.com/posts')
// 	console.log(x)
// }
// getText()

/**
 * 下面是一个例子，如果指定时间内没有获得结果，就将 Promise 的状态变为reject，否则变为resolve。
 */
const p1 = new Promise((resolve, reject) => {
	const result = fetch('https://jsonplaceholder.typicode.com/posts1')
	resolve(result)
})
const p2 = new Promise((resolve, reject) => {
	setTimeout(() => reject(new Error('request timeout')), 5000)
})
// p1.then((res) => {
// 	return res.json()
// }).then((res) => {
// 	console.log(res)
// })
const p = Promise.race([p1, p2])
p.then(console.log).catch(console.error)

//上面代码中，如果 5 秒之内fetch方法无法返回结果，变量p的状态就会变为rejected，从而触发catch方法指定的回调函数。
