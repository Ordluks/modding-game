import { createRef, useEffect } from 'react'
import { setupCanvas } from './setupCanvas'

export const GameCanvas: React.FC = () => {
	const ref = createRef<HTMLCanvasElement>()
	useEffect(() => setupCanvas(ref.current))

  return <canvas ref={ref} />
}