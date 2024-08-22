import React, {useState, useEffect} from 'react'
import {SelectChangeEvent} from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import {useAppContext} from '@/Context'
import {VehType} from './types'
import {getAllVehTypes} from '@/pages/api/getData'

export function VehicleTypeSelector() {
	const {setSelectedType} = useAppContext()

	const [vehTypes, setVehTypes] = useState<VehType[]>([])
	const [selectedValue, setSelectedValue] = useState<string>('')

	const handleChange = (event: SelectChangeEvent<string>) => {
		const value = event.target.value
		setSelectedValue(value)

		const selectedVehType = vehTypes.find(vehType => vehType.MakeName === value)
		if (selectedVehType && selectedVehType.MakeId !== undefined) {
			setSelectedType(selectedVehType.MakeId.toString())
		}
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getAllVehTypes()
				setVehTypes(data.Results || [])
			} catch (error) {
				console.error('Error fetching vehicle types:', error)
			}
		}
		fetchData()
	}, [])

	return (
		<div className='flex h-screen justify-center items-center'>
			<FormControl sx={{m: 1, minWidth: 120}}>
				<InputLabel>Vehicle Types</InputLabel>
				<Select
					value={selectedValue}
					onChange={handleChange}>
					{vehTypes.map(vehType => (
						<MenuItem
							key={vehType.MakeId}
							value={vehType.MakeName}>
							{vehType.MakeName}
						</MenuItem>
					))}
				</Select>
				<FormHelperText>Choose a vehicle type</FormHelperText>
			</FormControl>
		</div>
	)
}
