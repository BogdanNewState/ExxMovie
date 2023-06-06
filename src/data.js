import axios from 'axios'

//* Movies
export const getMovie = async () => {
	try {
		const res = await axios.get(
			'https://647dc9ceaf984710854a55d3.mockapi.io/api/v2/movies'
		)
		return res.data
	} catch (error) {
		console.log(error.message)
	}
}

//* Actors
export const getActor = async () => {
	try {
		const res = await axios.get(
			'https://647dc9ceaf984710854a55d3.mockapi.io/api/v2/actors'
		)
		return res.data
	} catch (error) {
		console.log(error.message)
	}
}
