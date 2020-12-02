import React from 'react'
import POPOSFeature from './POPOSFeature'
import './POPOSFeatureList.css'

function POPOSFeatureList({ features }) {
	const icons = features.map((feature) => {
		return <POPOSFeature name={feature} />
	})
	return <div className="POPOSFeatureList">{icons}</div>
}

export default POPOSFeatureList
