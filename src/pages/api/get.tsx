export async function getAllVehTypes() {
	try {
		const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json', {
			method: 'GET',
			headers: {
				accept: `application / json,`,
			},
		})
		const result = await response.json()

		return result
	} catch (error) {
		console.error()
	}
}
export async function getCurrentVeh() {
	try {
		const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2015?format=json', {
			method: 'GET',
			headers: {
				accept: `application / json,`,
			},
		})
		const result = await response.json()
		console.log(result.Results)
		return result
	} catch (error) {
		console.error()
	}
}
