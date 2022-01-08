import React from 'react'
import './Slider.css'
import '../output.css'
import { min, max, dotsArr } from '../constants/sliderInfo.js'

function Slider({ sliderValue, setSliderValue }) {
	const handleSlider = (event) => {
		setSliderValue(event.target.value)
	}

	return (
		<div className="w-[140px]">
			<input
				type="range"
				min={min}
				max={max}
				step={0.01}
				value={sliderValue}
				onInput={handleSlider}
				className="w-[140px] h-[2px] appearance-none cursor-pointer"
				id="slider"
				style={{
					backgroundImage: `linear-gradient(to right, #2563EB 0% ${sliderValue}%, #E5E7EB ${sliderValue}% 100%)`,
				}}
			></input>
			<div className="w-[140px] h-[6px] flex flex-row flex-nowrap justify-between relative bottom-[10px] pointer-events-none">
				{dotsArr.map((dotValue) => (
					<div
						key={dotValue}
						className={`dot ${
							dotValue <= sliderValue ? 'active' : 'disabled'
						} w-[6px] h-[6px] rounded-[3px]`}
					></div>
				))}
			</div>
		</div>
	)
}

export default Slider
