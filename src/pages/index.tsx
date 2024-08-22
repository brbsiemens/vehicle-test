import React, {useState} from 'react'
import {VehicleTypeSelector} from '@/components/VehicleTypeSelector'
import {VehicleModelYearSelector} from '@/components/VehicleModelYearSelector'
import {Button} from '@mui/material'
import {useAppContext} from '@/Context'
import Link from 'next/link'

export default function Home() {
	const {selectedType, selectedYear} = useAppContext()
	console.log(selectedType, selectedYear)
	return (
		<div className='flex h-screen justify-center items-center'>
			<VehicleTypeSelector />
			<VehicleModelYearSelector />
			{!selectedType && !selectedYear && <Button disabled>Next</Button>}
			{selectedType && selectedYear && (
				<Link href={`/result/${selectedType}/${selectedYear}`}>
					<Button variant='contained'>Next</Button>
				</Link>
			)}
		</div>
	)
}
