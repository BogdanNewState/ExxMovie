import PropTypes from 'prop-types'
import { useState } from 'react'
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'

const SliderActors = ({ actors }) => {
	const [currentActor, setCurrentActor] = useState(0)

	const nextActor = () => {
		setCurrentActor((currentActor + 1) % actors.length)
	}

	const prevActor = () => {
		setCurrentActor((currentActor - 1 + actors.length) % actors.length)
	}

	//! this helped ChatGPT ---
	const getDisplayedActors = () => {
		const startIndex = currentActor
		const endIndex = (startIndex + 3) % actors.length

		if (endIndex >= startIndex) {
			return actors.slice(startIndex, endIndex + 1)
		} else {
			return actors.slice(startIndex).concat(actors.slice(0, endIndex + 1))
		}
	}
	//! ---

	return (
		<div className='mt-8 flex flex-col gap-4'>
			<div className='flex justify-between items-center'>
				<h4 className='text-xl'>Best Artists</h4>
				<div className='flex gap-1'>
					<FiArrowLeftCircle
						onClick={prevActor}
						className='cursor-pointer'
						size={40}
					/>
					<FiArrowRightCircle
						onClick={nextActor}
						className='cursor-pointer'
						size={40}
					/>
				</div>
			</div>
			<ul className='flex gap-4 justify-center'>
				{getDisplayedActors().map((actor, index) => (
					<li
						key={index}
						className={`w-[150px] h-[200px] flex items-center justify-center bg-slate-500`}
					>
						{actor.name}
					</li>
				))}
			</ul>
		</div>
	)
}

SliderActors.propTypes = {
	actors: PropTypes.array.isRequired,
}

export default SliderActors
