const p1 = new Promise((resolve, reject) => {
	try {
		throw new Error('test')
	} catch (error) {
		reject(error)
	}
})
p1.catch((error) => {
	console.log(error)
})

const p2 = new Promise((resolve, reject) => {
	reject(new Error('test'))
})

p2.catch((error) => {
	console.log(error)
})

//p1和p2都是一样的效果

//一般来说，不要在then()方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。

//不建议
promise.then(
	(data) => {
		// success
	},
	(err) => {
		// error
	}
)

//建议
promise
	.then((result) => {
		//成功
	})
	.catch((err) => {
		//抛出错误
	})

//如果没有使用catch()方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。
const p3 = new Promise((resolve, reject) => {
	resolve(x * 2)
})
p3.then((data) => console.log(data))
setTimeout(() => {
	console.log('1111')
}, 1000)
//// Uncaught (in promise) ReferenceError: x is not defined
// 123

//catch()方法返回的还是一个 Promise 对象，因此后面还可以接着调用then()方法。
const p4 = new Promise((resolve, reject) => {
	resolve(x * 2)
})
p4.catch((error) => {
	console.log(error)
}).then(() => {
	console.log('carry on')
})

//代码因为没有报错，跳过了catch()方法，直接执行后面的then()方法。此时，要是then()方法里面报错，就与前面的catch()无关了。
Promise.resolve()
	.catch(function (error) {
		console.log('oh no', error)
	})
	.then(function () {
		console.log('carry on')
	})

//代码中，第二个catch()方法用来捕获前一个catch()方法抛出的错误。
someAsyncThing()
	.then(function () {
		return someOtherAsyncThing()
	})
	.catch(function (error) {
		console.log('oh no', error)
		// 下面一行会报错，因为y没有声明
		y + 2
	})
	.catch(function (error) {
		console.log('carry on', error)
	})
