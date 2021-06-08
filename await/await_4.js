const superagent = require('superagent')
const NUM_RETRIES = 3

/**
 * 如果await操作成功，就会使用break语句退出循环；如果失败，会被catch语句捕捉，然后进入下一轮循环。
 */
async function f() {
	let i
	for (i = 0; i < NUM_RETRIES; i++) {
		try {
			await superagent.get('http://google.com/this-throws-an-error')
			break
		} catch (e) {
			console.log(e)
		}
	}
	console.log(i)
}
f()
