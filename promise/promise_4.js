//Promise 在resolve语句后面，再抛出错误，不会被捕获，等于没有抛出。因为 Promise 的状态一旦改变，就永久保持该状态，不会再变了。
let p1 = new Promise((resolve, reject) => {
	resolve('ok')
	throw new Error('test')
})

p1.then((data) => {
	console.log(data)
}).catch((error) => {
	console.log(error)
})
