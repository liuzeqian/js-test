const p1 = new Promise((resolve, reject) => {
	reject('1')
})
//then 两个回调函数 一个是resolve,一个是reject
p1.then(
	(data) => {
		console.log(data)
	},
	(error) => {
		console.log(error)
	}
)
