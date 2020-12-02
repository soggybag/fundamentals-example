import React, { useState } from 'react'
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import data from '../../sfpopos-data.js'
import './POPOSList.css'

function POPOSList() {
	const [ query, setQuery ] = useState('')

	const [ coffee, setCoffee ] = useState(false)
	const [ power, setPower ] = useState(false)
	const [ art, setArt ] = useState(false)
	const [ toilet, setToilet ] = useState(false)

	const [ inDoors, setIndoors ] = useState(false)
	const [ outDoors, setOutdoors ] = useState(false)
	const [ both, setBoth ] = useState(true)

	const spaces = data.filter(({ features, title, address }) => {
		// Check the check boxes and radio buttons
		// console.log('Coffee:', coffee)
		console.log('has coffee:', features.includes('coffee'), title)
		const hasCoffee = coffee && features.includes('coffee')
		// if (coffee && features.includes('coffee')) { return true }
		// if (power  && features.includes('power'))  { return false }
		// if (art    && features.includes('art'))    { return false }
		// if (toilet && features.includes('toilet')) { return false }
		
		// true if query is in title
		const inTitle = title.toLowerCase().includes(query.toLowerCase())
		// true if query is in address
		const inAddress = address.toLowerCase().includes(query.toLowerCase())
		// return true if either is true

		// TODO: check for coffee?

		return inTitle || inAddress
	}).map((obj) => {
			const { title, address, images, hours, features, id } = obj
		return (
			<POPOSSpace
				id={id}
				key={`${title}-${id}`}
        name={title}
        address={address}
				image={images[0]}
				hours={hours}
				features={features}
      />
		)
	})

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
			{spaces}
    </div>
  )
}

export default POPOSList
