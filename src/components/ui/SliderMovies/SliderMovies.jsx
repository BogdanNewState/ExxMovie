import PropTypes from 'prop-types'
import { useState } from 'react'
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'
import { GoPlus } from 'react-icons/go'

const SliderMain = ({ movie }) => {
	const [currentMovie, setCurrentMovie] = useState(0)

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
		<div className='mt-4 w-full h-[400px] bg-gray-300 p-10 flex flex-col-reverse justify-between'>
			<div className='flex flex-col gap-3'>
				<h3 className='text-4xl'>{movie[currentMovie]?.title || 'No Title'}</h3>
				<p>{movie[currentMovie]?.genre || 'No Genre'}</p>
				<div className='flex gap-3 items-center'>
					<button className='bg-red-600 text-white text-lg px-8 py-3 rounded-2xl'>
						Watch
					</button>
					<div className='bg-gray-400 bg-opacity-50 p-[5px] rounded-md'>
						<GoPlus color='white' size={32} />
					</div>
				</div>
			</div>
			<div className='flex justify-between'>
				<FiArrowLeftCircle
					className='cursor-pointer'
					onClick={prevSlide}
					color='gray'
					size={40}
				/>
				<FiArrowRightCircle
					className='cursor-pointer'
					onClick={nextSlide}
					color='gray'
					size={40}
				/>
			</div>
		</div>
	)
}

SliderMain.propTypes = {
	movie: PropTypes.array,
}

export default SliderMain
