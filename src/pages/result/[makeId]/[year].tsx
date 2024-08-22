import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import {useEffect, useState} from 'react'
import {useAppContext} from '@/Context'
import {getCurrentVeh} from '@/pages/api/getData'

export default function VehicleTable() {
	const [vehTypes, setVehTypes] = useState<VehType[]>([])
	const {selectedType, selectedYear} = useAppContext()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getCurrentVeh(selectedType, selectedYear)
				setVehTypes(data.Results || [])
			} catch (error) {
				console.error('Error fetching vehicle types:', error)
			}
		}
		if (selectedType) {
			fetchData()
		}
	}, [selectedType, selectedYear])

	return (
		<div className='flex h-screen justify-center items-center'>
			<TableContainer
				component={Paper}
				className='w-4/6 bg-slate-200 h-full'>
				<Table aria-label='simple table'>
					<TableHead className='bg-slate-400'>
						<TableRow>
							<TableCell align='right'>Id</TableCell>
							<TableCell align='right'>Mark</TableCell>
							<TableCell align='right'>Type</TableCell>
							<TableCell align='right'>Year</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{!selectedType ? (
							<TableRow>
								<TableCell
									colSpan={4}
									align='center'>
									Please return to the previous page and select the selector options
								</TableCell>
							</TableRow>
						) : (
							vehTypes.map(vehicle => (
								<TableRow
									key={vehicle.Make_ID}
									sx={{'&:last-child td, &:last-child th': {border: 0}}}>
									<TableCell
										component='th'
										scope='row'>
										{vehicle.Make_ID}
									</TableCell>
									<TableCell align='right'>{vehicle.Make_Name}</TableCell>
									<TableCell align='right'>{vehicle.Model_ID}</TableCell>
									<TableCell align='right'>{vehicle.Model_Name}</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}
