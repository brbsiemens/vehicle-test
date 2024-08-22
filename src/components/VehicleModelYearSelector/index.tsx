import React, {useState, useEffect} from 'react'
import {SelectChangeEvent} from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import {useAppContext} from '@/Context'

const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]

export function VehicleModelYearSelector() {
	const {setSelectedYear} = useAppContext()
	const [selectedValue, setSelectedValue] = useState<string>('')

	const handleChange = (event: SelectChangeEvent<string>) => {
		const value = event.target.value
		setSelectedValue(value)
		setSelectedYear(value)
	}
	return (
		<div className='flex h-screen justify-center items-center'>
			<FormControl sx={{m: 1, minWidth: 120}}>
				<InputLabel>Vehicle Model Years</InputLabel>
				<Select
					value={selectedValue}
					onChange={handleChange}>
					{years.map((year, index) => (
						<MenuItem
							key={index}
							value={year}>
							{year}
						</MenuItem>
					))}
				</Select>
				<FormHelperText>Choose vehicle model years</FormHelperText>
			</FormControl>
		</div>
	)
}
