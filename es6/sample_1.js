let arr = { a: [1, 2, 3], b: [3, 4, 5] }
Object.keys(arr).forEach((item) => {
	arr[item] = arr[item].split(',')
})

console.log(arr)
