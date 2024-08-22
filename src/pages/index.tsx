import React, {useState, useEffect} from 'react'
import {SelectChangeEvent} from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import {getAllVehTypes, getCurrentVeh} from './api/get'
import {VehicleTypeSelector} from '@/components/VehicleTypeSelector'
import {VehicleModelYearSelector} from '@/components/VehicleModelYearSelector'
import {Button} from '@mui/material'
import {useAppContext} from '@/Context'

export default function Home() {
	return (
		<div className='flex h-screen justify-center items-center'>
			<VehicleTypeSelector />
			{/* <VehicleModelYearSelector /> */}

			<Button />
		</div>
	)
}
