export interface Root {
	status: boolean;
	message: string;
	timestamp: number;
	data: IFlightData[];
}

export interface IFlightData {
	id: string;
	type: string;
	name: string;
	code: string;
	city: string;
	cityName: string;
	regionName: string;
	country: string;
	countryName: string;
	countryNameShort: string;
	photoUri: string;
	distanceToCity: DistanceToCity;
	parent: string;
}

export interface DistanceToCity {
	value: number;
	unit: string;
}
