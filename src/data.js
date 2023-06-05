import axios from 'axios'

export const getData = async () => {
	try {
		const res = await axios.get(
			'https://647dc9ceaf984710854a55d3.mockapi.io/api/v2/movies'
		)
		return res.data
	} catch (error) {
		console.log(error.message)
	}
}
