import React, { useState, useEffect } from 'react'

const str = 'abcdefg'

function KeyTest() {
	const [index, setIndex] = useState(-1)

	useEffect(() => {
		document.addEventListener('keypress', (e) => {
			const char = String.fromCharCode(e.keyCode)
			setIndex(index => char === str[index + 1] ? index + 1 : index)
		})
	}, [])

	return (
		<div>
			{`Char: ${str[index]}`}
		</div>
	)
}

export default KeyTest