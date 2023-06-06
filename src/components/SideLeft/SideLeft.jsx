import { AiOutlineLogout, AiOutlineUser } from 'react-icons/ai'
import {
	BiAlarm,
	BiCaretRightCircle,
	BiCompass,
	BiHomeAlt2,
} from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { RiCommunityLine, RiSettings2Line } from 'react-icons/ri'

const SideLeft = () => {
	return (
		<div className='w-80 p-8 font-bold flex flex-col gap-5 text-xl'>
			<h1 className='text-2xl'>ExxMovie</h1>
			<div className='flex flex-col gap-3'>
				<h4 className='text-gray-400'>MENU</h4>
				<ul className='flex flex-col gap-2'>
					<li className='flex items-center gap-2 border-b-2 border-b-red-500'>
						<BiHomeAlt2 color='red' size={24} />
						<span>Home</span>
					</li>
					<li className='flex items-center gap-2 text-gray-500'>
						<RiCommunityLine color='gray' size={24} />
						<span>Community</span>
					</li>
					<li className='flex items-center gap-2 text-gray-500'>
						<BiCompass color='gray' size={24} />
						<span>Discovery</span>
					</li>
					<li className='flex items-center gap-2 text-gray-500'>
						<BiAlarm color='gray' size={24} />
						<span>Coming soon</span>
					</li>
				</ul>
			</div>
			<div className='flex flex-col gap-3 text-gray-500'>
				<h4 className='text-gray-400'>SOCIAL</h4>
				<ul className='flex flex-col gap-2'>
					<li className='flex items-center gap-2'>
						<AiOutlineUser color='gray' size={24} />
						<span>Friends</span>
					</li>
					<li className='flex items-center gap-2'>
						<FiUsers color='gray' size={24} />
						<span>Parties</span>
					</li>
					<li className='flex items-center gap-2'>
						<BiCaretRightCircle color='gray' size={24} />
						<span>Media</span>
					</li>
				</ul>
			</div>
			<div className='flex flex-col gap-3 text-gray-500'>
				<h4 className='text-gray-400'>GENERAL</h4>
				<ul className='flex flex-col gap-2'>
					<li className='flex items-center gap-2'>
						<RiSettings2Line color='gray' size={24} />
						<span>Setting</span>
					</li>
					<li className='flex items-center gap-2'>
						<AiOutlineLogout color='gray' size={24} />
						<span>Log Out</span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default SideLeft
