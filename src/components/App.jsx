import MainContent from './MainContent/MainContent'
import SideLeft from './SideLeft/SideLeft'
import SideRight from './SideRight/SideRight'

const App = () => {
	return (
		<div className='container mx-auto px-1 flex'>
			<SideLeft />
			<MainContent />
			<SideRight />
		</div>
	)
}

export default App
