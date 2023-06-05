import { useEffect, useState } from 'react'
import { GoPlus } from 'react-icons/go'

import { getData } from '../../../data'

const MainContent = () => {
	const [movie, setMovie] = useState([])

	const getMovies = async () => {
		try {
			const res = await getData()
			setMovie(res)
		} catch (error) {
			console.log(error.message)
		}
	}

	useEffect(() => {
		getMovies()
	}, [])

	return (
		<div className='border-r-2 border-l-2 border-gray-200 w-full px-20 py-8'>
			<ul className='flex gap-2 text-gray-500 font-bold text-lg'>
				<li>TV Series</li>
				<li className='text-black'>Movies</li>
				<li>Animes</li>
			</ul>
			<div className='mt-4 w-full h-[400px] bg-gray-300 p-10 flex items-end'>
				<div>
					<h3 className='text-4xl'>TITLE</h3>
					<p>GENRES</p>
					<div className='flex gap-3 items-center'>
						<button className='bg-red-600 text-white text-lg px-8 py-3 rounded-2xl'>
							Watch
						</button>
						<div className='bg-gray-400 bg-opacity-50 p-[5px] rounded-md'>
							<GoPlus color='white' size={32} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainContent
