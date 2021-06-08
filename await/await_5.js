async function f() {
	let fool = await getFool()
	let bar = await getBar()

	/**
	 * 上面代码中，getFoo和getBar是两个独立的异步操作（即互不依赖），
	 * 被写成继发关系。这样比较耗时，因为只有getFoo完成以后，才会执行getBar，完全可以让它们同时触发。
	 */
	// 方法一
	let [fool, bar] = await Promise.all([getFool(), getBar()])

	//方法二
	let fooPromise = getFoo()
	let barPromise = getBar()
	let foo = await fooPromise
	let bar = await barPromise
}
