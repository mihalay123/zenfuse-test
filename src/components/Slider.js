import React, { useState, useEffect } from 'react'

function Slider() {
	const [sliderValue, setSliderValue] = useState(0)

	const min = 0
	const max = 100

	const handleSlider = (event) => {
		setSliderValue(event.target.value)
	}

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
		<form className="w-64 h-20 flex flex-row justify-center items-center bg-white box-border rounded-2xl border border-solid border-cool-gray-200 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
			<input
				type="range"
				min={min}
				max={max}
				step={0.05}
				value={sliderValue}
				onChange={handleSlider}
				className="w-36 form-range form-range"
			></input>
			<input
				type="text"
				min={min}
				max={max}
				value={sliderValue}
				onChange={handleTextInput}
				className="w-14"
				// pattern="^([0-9]{1,2}){1}(\.[0-9]{2})?$"
			></input>
		</form>
	)
}

export default Slider
