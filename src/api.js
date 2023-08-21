// city api for city search / dropdown menu
// LINK: https://rapidapi.com/wirefreethought/api/geodb-cities
// ENDPOINT: Cities
export const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const apioptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'YOUR-API-KEY-HERE',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

// time api for current time in city
// LINK: https://rapidapi.com/wirefreethought/api/geodb-cities
// ENDPOINT: City Date-Time
export const timeurl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const timeoptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'YOUR-API-KEY-HERE',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

// weather api for current city weather
// LINK: https://openweathermap.org/api/one-call-3
export const weatherurl = 'https://api.openweathermap.org/data/2.5';
export const weatherkey = 'YOUR-API-KEY-HERE';

// map api for city location & map
// LINK: https://apidocs.geoapify.com/docs/maps/static/#api
export const mapurl = 'https://maps.geoapify.com/v1';
export const mapkey = 'YOUR-API-KEY-HERE';