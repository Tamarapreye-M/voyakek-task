export interface IHotelResponse {
	status: boolean;
	message: string;
	timestamp: number;
	data: IHotel[];
}

export interface IHotel {
	dest_id: string;
	search_type: string;
	nr_hotels: number;
	city_ufi?: number | null;
	lc: string;
	type: string;
	country: string;
	hotels: number;
	label: string;
	name: string;
	cc1: string;
	latitude: number;
	image_url?: string;
	longitude: number;
	roundtrip: string;
	dest_type: string;
	region: string;
	city_name: string;
	landmark_type?: number;
}
