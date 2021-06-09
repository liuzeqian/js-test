async function sleep(ms) {
	return await new Promise((resolve) => {
		setTimeout(resolve, ms)
	})
}

async function getOne() {
	console.log('getOne start')
	await sleep(3000)
	console.log('getOne done')
	return '1'
}

async function getTwo() {
	console.log('getTwo start')
	await sleep(2000)
	console.log('getTwo done')
	return '2'
}

async function a() {
	const startTime = Date.now()
	let one = await getOne()
	console.log(one)
	let two = await getTwo()
	console.log('triggerSequentially cost: ' + (Date.now() - startTime))
}

// a()

async function b() {
	const startTime = Date.now()
	let [one, two] = await Promise.all([getOne(), getTwo()])
	console.log(one)
	console.log('triggerSequentially cost: ' + (Date.now() - startTime))
}
// b()

async function c() {
	const startTime = Date.now()
	let onePromise = getOne()
	let twoPromise = getTwo()
	let one = await onePromise
	let two = await twoPromise
	console.log(one)
	console.log('triggerSequentially cost: ' + (Date.now() - startTime))
}
// c()

function d() {
	const startTime = Date.now()
	getOne()
		.then((result) => {
			console.log(result)
			console.log('triggerSequentially cost: ' + (Date.now() - startTime))
		})
		.catch((e) => {
			console.log(e)
		})

	getTwo()
		.then((result) => {
			console.log(result)
			console.log('triggerSequentially cost: ' + (Date.now() - startTime))
		})
		.catch((e) => {
			console.log(e)
		})
}

d()
