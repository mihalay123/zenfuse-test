import { useEffect } from 'react'
import SliderContainer from './components/SliderContainer'
import Switcher from './components/Switcher'
import './output.css'

function App() {
	return (
		<div className="h-[100vh] bg-white dark:bg-[#171717]">
			<div className="w-[338px] h-[76px] position: absolute inset-2/4 flex flex-row justify-between items-center dark:true-gray-900 bg-opacity-0">
				<Switcher />
				<SliderContainer />
			</div>
		</div>
	)
}

export default App
