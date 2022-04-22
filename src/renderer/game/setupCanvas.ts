export const setupCanvas = (element: HTMLCanvasElement | null) => {
	const canvas = element
	if (canvas === null) throw Error('Can not setup canvas: canvas element is null')

	const ctx = canvas.getContext('2d')
	if (ctx === null) throw Error('Can not setup canvas: can not get draw contect')

	const resizeCanvas = () => {
		canvas.width = window.innerWidth
		canvas.height = window.innerHeight
	}

	const dynamiclyResize = () => {
		draw(ctx)
		resizeCanvas
	}

	resizeCanvas()

	const drawingLoop = setInterval(() => {
		draw(ctx)
	}, 100)

	window.addEventListener('resize', dynamiclyResize)

	const unsetupCanvas = () => {
		clearInterval(drawingLoop)
		window.removeEventListener('resize', dynamiclyResize)
	}

	return unsetupCanvas
}