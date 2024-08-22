import {useAppContext} from '@/Context'
const getAllVehTypesAPI = process.env.NEXT_PUBLIC_GET_VEHICLE_TYPES_URL
const getCurrentVehAPI = process.env.NEXT_PUBLIC_GET_CURRENT_VEHICLE_URL

export async function getAllVehTypes() {
	try {
		const response = await fetch(`${getAllVehTypesAPI}`, {
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

export async function getCurrentVeh(id: string, year: string) {
	try {
		const response = await fetch(`${getCurrentVehAPI}/makeId/${id}/modelyear/${year}?format=json`, {
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
