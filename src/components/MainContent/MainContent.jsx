import { useEffect, useState } from 'react'

import { getActor, getMovie } from '../../data'

import SliderActors from '../ui/SliderActors/SliderActors'
import SliderMovies from '../ui/SliderMovies/SliderMovies'

const MainContent = () => {
	const [movie, setMovie] = useState([])
	const [actors, setActors] = useState([])

	const getMovies = async () => {
		try {
			const res = await getMovie()
			setMovie(res)
		} catch (error) {
			console.log(error.message)
		}
	}

	const getActors = async () => {
		try {
			const res = await getActor()
			setActors(res)
		} catch (error) {
			console.log(error.message)
		}
	}

	useEffect(() => {
		getMovies()
		getActors()
	}, [])

	return (
		<div className='border-r-2 border-l-2 border-gray-200 w-full px-20 py-8'>
			<ul className='flex gap-2 text-gray-500 font-bold text-lg'>
				<li>TV Series</li>
				<li className='text-black'>Movies</li>
				<li>Animes</li>
			</ul>
			{movie.length > 0 && <SliderMovies movie={movie} />}
			{actors.length > 0 && <SliderActors actors={actors} />}
		</div>
	)
}

export default MainContent
