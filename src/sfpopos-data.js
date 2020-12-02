import data from './sfpopos-data.json'

data.forEach((obj, i) => {
	obj.id = i
})

const allFeatures = new Set(data.map((space) => {
	return space.features
}).flat())

export { allFeatures }
export default data



// {
//      "title":"Transamerica Redwood Park",
//      "desc":"Located in the shadow of the Transamerica Pyramid, Redwood Park is one of the Financial District's greenest and most serene spots. Here, towering redwoods surround a half acre of statues and a large central water feature. Plus, the park is often empty, which means there's almost always a bench available for the hogging. Potential visitors take note: The park is closed every evening",
//      "address":"600 Montgomery St San Francisco, CA",
//      "hours": "Mon - Fri 7am - 5:30pm",
//      "geo":{
//         "lat":37.7952005,
//         "lon":-122.4027927
//      },
//      "images":[
//         "transamerica-redwood-park.jpg"
//      ],
//      "website":"https://pyramidcenter.com/point-of-interest/redwood-park/",
//      "features":[
//         "outdoors",
//         "coffee"
//      ]
//   }