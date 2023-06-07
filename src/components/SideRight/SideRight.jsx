import { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

import { getMovie } from '../../data.js'
import ModalSearch from '../ui/ModalSearch/ModalSearch.jsx'

const SideRight = () => {
	const [movie, setMovie] = useState([])
	const [search, setSearch] = useState('')
	const [modalOpen, setModalOpen] = useState(false)

	const getMovies = async () => {
		try {
			const res = await getMovie()
			setMovie(res)
		} catch (error) {
			console.log(error.message)
		}
	}

	const forEachPopularity = () => {
		let moviePopularity = null
		movie.forEach(item => {
			if (item.popularity) {
				moviePopularity = item.popularity
			}
		})
		return moviePopularity
	}

	const openModal = () => {
		setModalOpen(true)
	}

	useEffect(() => {
		getMovies()
	}, [])

	const searchMovie = e => {
		setSearch(e.target.value)
	}

	return (
		<div className='p-8 w-88 flex flex-col gap-9'>
			<div className='flex items-center gap-2 p-2 border border-gray-400 rounded-2xl relative'>
				<BsSearch color='gray' size={24} />
				<input
					className='outline-none w-full text-lg'
					type='text'
					placeholder='Search'
					value={search}
					onChange={searchMovie}
					onClick={openModal}
				/>
				{modalOpen ? (
					<ModalSearch
						search={search}
						movie={movie}
						open={openModal}
						setOpen={setModalOpen}
					/>
				) : null}
			</div>
			<div className='flex flex-col gap-4'>
				<h4 className='text-xl  text-gray-600'>Popular Movies</h4>
				<ul className='flex flex-col gap-2'>
					{movie.slice(0, 3).map(
						item =>
							forEachPopularity() === item.popularity && (
								<li key={item.id} className='flex gap-1'>
									<div className='w-[4rem] h-[5.5rem] bg-gray-400 text-white text-2xl flex justify-center items-center'>
										?
									</div>
									<h3>{item.title}</h3>
								</li>
							)
					)}
				</ul>
				<button className='text-lg text-white bg-red-500 rounded-3xl px-4 py-3 '>
					See More
				</button>
			</div>
			<div className='flex flex-col gap-4'>
				<h4 className='text-xl  text-gray-600'>Favorite</h4>
				<ul className='flex flex-col gap-2'>
					<li>Nothing to see here</li>
				</ul>
				<button className='text-lg text-white bg-red-500 rounded-3xl px-4 py-3 '>
					See More
				</button>
			</div>
		</div>
	)
}

export default SideRight
