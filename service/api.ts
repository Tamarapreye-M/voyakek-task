import axios from "axios";

const client = axios.create({
	baseURL: "https://booking-com15.p.rapidapi.com/api/v1",
	timeout: 1000,
	headers: {
		"x-rapidapi-key": "c4d9122dc2msh8b36e4d55e9b8eep11e282jsn07a3c9f87811",
		"x-rapidapi-host": "booking-com15.p.rapidapi.com",
	},
});

export default client;
