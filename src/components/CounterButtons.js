import { useContext } from 'react'
import { CounterContext } from './CounterProvider'

export default function CounterButtons() {
	const [count, setCount] = useContext(CounterContext)

	return (
		<div>
			<button
				onClick={() => setCount(count + 1)}
			>Up</button>
			<button
				onClick={() => setCount(count - 1)}
			>Down</button>
		</div>
	)
}