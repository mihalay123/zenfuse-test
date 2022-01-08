import React, { useState } from 'react'
import Slider from './Slider'
import { min, max } from '../constants/sliderInfo.js'

function SliderContainer() {
	const [sliderValue, setSliderValue] = useState(50)

	const handleTextInput = (event) => {
		if (event.target.value < 0) {
			event.target.value = 0
		}
		if (event.target.value > 100) {
			event.target.value = 100
		}
		setSliderValue(event.target.value)
	}
	return (
		<form className="w-[286px] h-[76px] flex flex-row items-center justify-evenly bg-white box-border rounded-2xl border border-solid border-cool-gray-200 shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:bg-[#262626] dark:border-[#A3A3A3]">
			<Slider sliderValue={sliderValue} setSliderValue={setSliderValue} />
			<input
				type="text"
				min={min}
				max={max}
				value={sliderValue}
				onChange={handleTextInput}
				className="w-[62px] h-[36px] text-center border border-solid border-cool-gray-200 rounded-lg text-xs dark:bg-[#262626] dark:border-[#A3A3A3] dark:text-white font-['Inter']"
			></input>
		</form>
	)
}

export default SliderContainer
