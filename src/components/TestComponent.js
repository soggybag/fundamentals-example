import React, { useState } from 'react'

function TestComponent() {
	// Handle Text input
	const [ query, setQuery ] = useState('')

	// Check Boxes - choose as many as apply
	const [ coffee, setCoffee ] = useState(false)
	const [ power, setPower ] = useState(false)
	const [ art, setArt ] = useState(false)
	const [ toilet, setToilet ] = useState(false)

	// Radio Buttons - Choose one
	const [ inDoors, setIndoors ] = useState(false)
	const [ outDoors, setOutdoors ] = useState(false)
	const [ both, setBoth ] = useState(true)

  return (
    <div className="POPOSList">
			<form>
				<div className="POPOSList-search">
					<input 
						value={query}
						placeholder="search"
						onChange={(e) => setQuery(e.target.value)}
					/>
					<button type="submit">Submit</button>
				</div>
				<div className="POPOSList-checkboxes">
					<label>
						<input type="checkbox" checked={coffee} onChange={() => setCoffee(!coffee)} />
						<span>Coffee</span>
					</label>
					<label>
						<input type="checkbox" checked={art} onChange={() => setArt(!art)} />
						<span>Art</span>
					</label>
					<label>
						<input type="checkbox" checked={toilet} onChange={() => setToilet(!toilet)} />
						<span>Toilet</span>
					</label>
					<label>
						<input type="checkbox" checked={power} onChange={() => setPower(!power)} />
						<span>Power</span>
					</label>
					<div className="POPOSList-radios">
						<label>
							<input type="radio" name="indoors" checked={inDoors} onChange={() => {
								setIndoors(true)
								setOutdoors(false)
								setBoth(false)
							}} />
							<span>Indoors</span>
						</label>
						<label>
							<input type="radio" name="indoors" checked={outDoors} onChange={() => {
								setIndoors(false)
								setOutdoors(true)
								setBoth(false)
							}} />
							<span>Outdoors</span>
						</label>
						<label>
							<input type="radio" name="indoors" checked={both} onChange={() => {
								setIndoors(false)
								setOutdoors(false)
								setBoth(true)
							}} />
							<span>Both</span>
						</label>
					</div>
				</div>
			</form>
    </div>
  )
}

export default TestComponent
