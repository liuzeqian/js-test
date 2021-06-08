// const p = Promise.all([p1, p2, p3])

// p的状态由p1、p2、p3决定，分成两种情况。
// （1）只有p1、p2、p3的状态都变成fulfilled，
//p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

// （2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，
// 此时第一个被reject的实例的返回值，会传递给p的回调函数。

const p1 = new Promise((resolve, reject) => {
	resolve('hello')
})
	.then((result) => result)
	.catch((e) => e)

const p2 = new Promise((resolve, reject) => {
	throw new Error('报错了')
})
	.then((result) => result)
	.catch((e) => e)

Promise.all([p1, p2])
	.then((result) => console.log(result))
	.catch((e) => console.log(e))

/**
 *
 * 上面代码中，p1会resolved，p2首先会rejected，但是p2有自己的catch方法，
 * 该方法返回的是一个新的 Promise 实例，p2指向的实际上是这个实例。该实例执行完catch方法后，
 * 也会变成resolved，导致Promise.all()方法参数里面的两个实例都会resolved，因此会调用then方法指定的回调函数，
 * 而不会调用catch方法指定的回调函数。如果p2没有自己的catch方法，就会调用Promise.all()的catch方法。
 */
const p1 = new Promise((resolve, reject) => {
	resolve('hello')
}).then((result) => result)

const p2 = new Promise((resolve, reject) => {
	throw new Error('报错了')
}).then((result) => result)

Promise.all([p1, p2])
	.then((result) => console.log(result))
	.catch((e) => console.log(e))
