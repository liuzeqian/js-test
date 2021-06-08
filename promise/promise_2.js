const p1 = new Promise(function (resolve, reject) {
	setTimeout(() => reject(new Error('fail')), 3000)
})

const p2 = new Promise(function (resolve, reject) {
	setTimeout(() => resolve(p1), 1000)
})
p2.then((result) => console.log(result)).catch((error) => console.log(error))

//上面代码中，p1是一个 Promise，3 秒之后变为rejected。p2的状态在 1 秒之后改变，resolve方法返回的是p1。
//由于p2返回的是另一个 Promise，导致p2自己的状态无效了，由p1的状态决定p2的状态。
//所以，后面的then语句都变成针对后者（p1）。又过了 2 秒，p1变为rejected，导致触发catch方法指定的回调函数。

//注意，调用resolve或reject并不会终结 Promise 的参数函数的执行。
