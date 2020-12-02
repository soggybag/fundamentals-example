import React from 'react'
import { Link } from 'react-router-dom'
import './POPOSSpace.css'

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props
  return (
    <div className="POPOSSpace">
			<Link to={`/details/${id}`}>
      	<img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="Hello" />
			</Link>
			<Link 
				className="POPOSSpace-title" // add a class name!
				to={`/details/${id}`}>
				<h1>{name}</h1>
			</Link>

			<div className="POPOSSpace-info">
				<div >{address}</div>
				<div>{hours}</div>
				<div>{props.features.map(n => <b>{n} </b>)}</div>
			</div>
    </div>
  )
}

export default POPOSSpace