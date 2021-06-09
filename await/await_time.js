async function sleep(ms) {
	return await new Promise((resolve) => {
		setTimeout(resolve, ms)
	})
}

async function getOne() {
	console.log('getOne start')
	await sleep(1000)
	console.log('getOne done')
}

async function getTwo() {
	console.log('getTwo start')
	await sleep(2000)
	console.log('getTwo done')
}

async function a() {
	const startTime = Date.now()
	let one = await getOne()
	let two = await getTwo()
	console.log('triggerSequentially cost: ' + (Date.now() - startTime))
}

// a()

async function b() {
	const startTime = Date.now()
	let [one, two] = await Promise.all([getOne(), getTwo()])
	console.log('triggerSequentially cost: ' + (Date.now() - startTime))
}
// b()

async function c() {
	const startTime = Date.now()
	let onePromise = getOne()
	let twoPromise = getTwo()
	let one = await onePromise
	let two = await twoPromise
	console.log('triggerSequentially cost: ' + (Date.now() - startTime))
}
c()
