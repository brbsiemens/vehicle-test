import {VehType} from '@/components/VehicleTypeSelector/types'

export function findIdByName(array: VehType[], name: any): VehType | null {
	for (const item of array) {
		if (item['MakeName'] === name) {
			return item
		}
	}
	return null
}
