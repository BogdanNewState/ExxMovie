import { useEffect, useState } from 'react'
import { GoPlus } from 'react-icons/go'

import { getData } from '../../../data'

const MainContent = () => {
	const [movie, setMovie] = useState([])
	const [currentMovie, setCurrentMovie] = useState(0)

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

	const prevSlide = () => {
		if (currentMovie === 0) {
			setCurrentMovie(movie.length - 1)
		} else {
			setCurrentMovie(currentMovie - 1)
		}
	}

	const nextSlide = () => {
		if (currentMovie === movie.length - 1) {
			setCurrentMovie(0)
		} else {
			setCurrentMovie(currentMovie + 1)
		}
	}

	return (
		<div className='border-r-2 border-l-2 border-gray-200 w-full px-20 py-8'>
			<ul className='flex gap-2 text-gray-500 font-bold text-lg'>
				<li>TV Series</li>
				<li className='text-black'>Movies</li>
				<li>Animes</li>
			</ul>
			<div className='mt-4 w-full h-[400px] bg-gray-300 p-10 flex items-end'>
				<ul className='w-full'>
					<li className='flex flex-col gap-2'>
						<h3 className='text-4xl'>
							{movie[currentMovie]?.title || 'No Title'}
						</h3>
						<p>GENRES</p>
						<div className='flex gap-3 items-center'>
							<button className='bg-red-600 text-white text-lg px-8 py-3 rounded-2xl'>
								Watch
							</button>
							<div className='bg-gray-400 bg-opacity-50 p-[5px] rounded-md'>
								<GoPlus color='white' size={32} />
							</div>
						</div>
						<div className='flex justify-between'>
							<button
								onClick={prevSlide}
								className='bg-gray-200 text-gray-600 text-lg px-4 py-2 rounded-lg mr-2'
							>
								Previous
							</button>
							<button
								onClick={nextSlide}
								className='bg-gray-200 text-gray-600 text-lg px-4 py-2 rounded-lg'
							>
								Next
							</button>
						</div>
					</li>
				</ul>
			</div>
			<div className='mt-8 flex flex-col gap-4'>
				<div className='flex justify-between items-center'>
					<h4 className='text-xl'>Best Artists</h4>
					<div>
						<button className='bg-gray-200 text-gray-600 p-5 rounded-full'>
							Prev
						</button>
						<button className='bg-gray-200 text-gray-600 p-5 rounded-full'>
							Next
						</button>
					</div>
				</div>
				<ul className='flex gap-4 justify-center'>
					<li className='w-[150px] h-[200px] flex items-center justify-center bg-slate-500'>
						?
					</li>
					<li className='w-[150px] h-[200px] flex items-center justify-center bg-slate-500'>
						?
					</li>
					<li className='w-[150px] h-[200px] flex items-center justify-center bg-slate-500'>
						?
					</li>
					<li className='w-[150px] h-[200px] flex items-center justify-center bg-slate-500'>
						?
					</li>
				</ul>
			</div>
		</div>
	)
}

export default MainContent
