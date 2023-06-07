import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'

const ModalSearch = ({ search, movie, open, setOpen }) => {
	const modalRef = useRef()

	const searchMovies = movie.filter(movie =>
		movie.title.toLowerCase().includes(search.toLowerCase())
	)

	useEffect(() => {
		const handleClickOutside = e => {
			if (modalRef.current && !modalRef.current.contains(e.target)) {
				setOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [open, setOpen])

	return (
		<>
			{searchMovies.length > 0 && (
				<ul
					className='flex flex-col gap-2 absolute top-16 h-40 w-full bg-gray-500 text-neutral-100 rounded-lg p-3 overflow-y-auto'
					ref={modalRef}
				>
					{searchMovies.map(item => (
						<li key={item.id} className='flex gap-1'>
							<h3>{item.title}</h3>
						</li>
					))}
				</ul>
			)}
		</>
	)
}

ModalSearch.propTypes = {
	search: PropTypes.string,
	movie: PropTypes.array,
	open: PropTypes.func,
	setOpen: PropTypes.func,
}

export default ModalSearch
