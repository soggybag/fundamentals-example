import { useContext } from 'react'
import { CounterContext } from './CounterProvider'

export default function CounterDisplay() {
	const [count] = useContext(CounterContext)

	return (
		<div>
			<h1>** {count} **</h1>
			<small>-- Count --</small>
		</div>
	)
}