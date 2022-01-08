import React, { useState, useEffect } from 'react'
import changeTheme from '../utils/changeTheme'
import { light, dark } from '../constants/themes'

import { ReactComponent as SunIcon } from '../icons/sun.svg'
import { ReactComponent as MoonIcon } from '../icons/moon.svg'

function Switcher() {
	const handleTheme = () => {
		changeTheme()

		const theme = localStorage.getItem('theme')
		if (theme === null) {
			localStorage.setItem('theme', light)
		}
		if (theme === light) {
			localStorage.setItem('theme', dark)
		}
		if (theme === dark) {
			localStorage.setItem('theme', light)
		}
	}

	return (
		<div className="w-[30px] h-[60px]">
			<div className="w-[30px] h-[60px] bg-gray-100 rounded-[8px] flex flex-col dark:bg-[#A3A3A3]">
				<div
					className="w-[30px] h-[30px] bg-white border border-solid border-cool-gray-200 rounded-[8px] shadow-[0_2px_4px_rgba(57,61,69,0.06)] flex items-center justify-center shrink-0 pointer-events-none cursor-default dark:cursor-pointer dark:pointer-events-auto dark:border-none dark:bg-[#A3A3A3]"
					onClick={handleTheme}
				>
					<SunIcon className="w-[14px] h-[14px] fill-[#171717] dark:fill-[#F4F4F5]" />
				</div>
				<div
					className="w-[30px] h-[30px] rounded-[8px] flex items-center justify-center shrink-0 cursor-pointer pointer-events-auto dark:pointer-events-none dark:cursor-default dark:bg-[#262626] dark:border dark:border-solid dark:border-white "
					onClick={handleTheme}
				>
					<MoonIcon className="w-[12px] h-[12px] fill-[#A3A3A3] dark:fill-[#F4F4F5]" />
				</div>
			</div>
		</div>
	)
}

export default Switcher
