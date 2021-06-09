const sleep = function (ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms)
	})
}

function testPromise() {
	const startTime = Date.now()
	sleep(1000).then(() => {
		console.log('one')
	})
	sleep(2000).then(() => {
		console.log('two')
		console.log('triggerSequentially cost: ' + (Date.now() - startTime))
	})
}
testPromise()
