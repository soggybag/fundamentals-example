import React, { useState } from 'react'

function SearchPOPOS() {
	const [ query, setQuery ] = useState('')
	return (
		<form>
			<input 
				value={query}
				placeholder="search"
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button type="submit">Submit</button>
		</form>
	)
}

export default SearchPOPOS