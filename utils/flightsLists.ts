const sampleFlightList = {
	status: true,
	message: "Success",
	timestamp: 1734390033567,
	data: [
		{
			id: "LOS.AIRPORT",
			type: "AIRPORT",
			name: "Murtala Muhammed International Airport",
			code: "LOS",
			city: "LOS",
			cityName: "Lagos",
			regionName: "Lagos State",
			country: "NG",
			countryName: "Nigeria",
			countryNameShort: "Nigeria",
			photoUri:
				"https://q-xx.bstatic.com/xdata/images/city/square150/684495.jpg?k=2b98aa3cd700df1510ed0662896e730d379fdcba41fb2146e21703b5b226b281&o=",
			distanceToCity: {
				value: 8.591741302147796,
				unit: "km",
			},
			parent: "LOS",
		},
		{
			id: "ABV.AIRPORT",
			type: "AIRPORT",
			name: "Nnamdi Azikiwe International Airport",
			code: "ABV",
			city: "ABV",
			cityName: "Abuja",
			country: "NG",
			countryName: "Nigeria",
			countryNameShort: "Nigeria",
			photoUri:
				"https://q-xx.bstatic.com/xdata/images/city/square150/822309.jpg?k=cc7b435d6a6a6827ddc91469993c733a0eba8c7e72334dd09b3556994ebb20f3&o=",
			distanceToCity: {
				value: 26.1341928553319,
				unit: "km",
			},
			parent: "ABV",
		},
		{
			id: "QUO.AIRPORT",
			type: "AIRPORT",
			name: "Akwa Ibom Airport",
			code: "QUO",
			city: "QUO",
			cityName: "Uyo",
			country: "NG",
			countryName: "Nigeria",
			countryNameShort: "Nigeria",
			photoUri: "https://q-xx.bstatic.com/static/img/plane-100.jpg",
			distanceToCity: {
				value: 26.223661518936087,
				unit: "km",
			},
			parent: "QUO",
		},
		{
			id: "BNI.AIRPORT",
			type: "AIRPORT",
			name: "Benin City Airport",
			code: "BNI",
			city: "BNI",
			cityName: "Benin City",
			regionName: "Ikpoba-Okha",
			country: "NG",
			countryName: "Nigeria",
			countryNameShort: "Nigeria",
			photoUri:
				"https://q-xx.bstatic.com/xdata/images/city/square150/955868.jpg?k=02ec63cfd753cbe62b9c0ce70393ba9c92526cb9f1d54b16af504cf7e91511f4&o=",
			distanceToCity: {
				value: 4.514366523934145,
				unit: "km",
			},
			parent: "BNI",
		},
		{
			id: "PHC.AIRPORT",
			type: "AIRPORT",
			name: "Port Harcourt International Airport",
			code: "PHC",
			city: "PHC",
			cityName: "Port Harcourt",
			country: "NG",
			countryName: "Nigeria",
			countryNameShort: "Nigeria",
			photoUri: "https://q-xx.bstatic.com/static/img/plane-100.jpg",
			distanceToCity: {
				value: 28.606578248255833,
				unit: "km",
			},
			parent: "PHC",
		},
		{
			id: "ENU.AIRPORT",
			type: "AIRPORT",
			name: "Enugu Airport",
			code: "ENU",
			city: "ENU",
			cityName: "Enugu",
			country: "NG",
			countryName: "Nigeria",
			countryNameShort: "Nigeria",
			photoUri:
				"https://q-xx.bstatic.com/xdata/images/city/square150/894736.jpg?k=cf0259d47cd48cd87c08e3d1c03cff4a32eb6d81b3e507eedae022ff780c99b5&o=",
			distanceToCity: {
				value: 7.364740890792523,
				unit: "km",
			},
			parent: "ENU",
		},
		{
			id: "KAD.AIRPORT",
			type: "AIRPORT",
			name: "Kaduna Airport",
			code: "KAD",
			city: "KAD",
			cityName: "Kaduna",
			country: "NG",
			countryName: "Nigeria",
			countryNameShort: "Nigeria",
			photoUri:
				"https://q-xx.bstatic.com/xdata/images/city/square150/692323.jpg?k=75a8c98abcb83606b0245725b1315f96727870bb5e8a4255418ce272966ebd39&o=",
			distanceToCity: {
				value: 23.284129502815187,
				unit: "km",
			},
			parent: "KAD",
		},
		{
			id: "QRW.AIRPORT",
			type: "AIRPORT",
			name: "Warri Airport",
			code: "QRW",
			city: "QRW",
			cityName: "Warri",
			country: "NG",
			countryName: "Nigeria",
			countryNameShort: "Nigeria",
			photoUri: "https://q-xx.bstatic.com/static/img/plane-100.jpg",
			distanceToCity: {
				value: 11.561430688411797,
				unit: "km",
			},
			parent: "QRW",
		},
		{
			id: "MIU.AIRPORT",
			type: "AIRPORT",
			name: "Maiduguri Airport",
			code: "MIU",
			city: "MIU",
			cityName: "Maiduguri",
			country: "NG",
			countryName: "Nigeria",
			countryNameShort: "Nigeria",
			photoUri: "https://q-xx.bstatic.com/static/img/plane-100.jpg",
			distanceToCity: {
				value: 7.088178027131675,
				unit: "km",
			},
			parent: "MIU",
		},
		{
			id: "QOW.AIRPORT",
			type: "AIRPORT",
			name: "Sam Mbakwe Airport",
			code: "QOW",
			city: "QOW",
			cityName: "Owerri",
			regionName: "Owerri Municipal",
			country: "NG",
			countryName: "Nigeria",
			countryNameShort: "Nigeria",
			photoUri: "https://q-xx.bstatic.com/static/img/plane-100.jpg",
			distanceToCity: {
				value: 20.25211582595246,
				unit: "km",
			},
			parent: "QOW",
		},
	],
};

const sampleFlightList2 = {
	status: true,
	message: "Success",
	timestamp: 1734390813071,
	data: {
		aggregation: {
			totalCount: 397,
			filteredTotalCount: 397,
			stops: [
				{
					numberOfStops: 0,
					count: 24,
					minPrice: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
					minPriceRound: {
						currencyCode: "NGN",
						units: 436760,
						nanos: 740000000,
					},
				},
				{
					numberOfStops: 1,
					count: 386,
					minPrice: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
					minPriceRound: {
						currencyCode: "NGN",
						units: 436760,
						nanos: 740000000,
					},
				},
				{
					numberOfStops: 2,
					count: 397,
					minPrice: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
					minPriceRound: {
						currencyCode: "NGN",
						units: 436760,
						nanos: 740000000,
					},
				},
			],
			airlines: [
				{
					name: "Air Peace Limited",
					logoUrl: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
					iataCode: "P4",
					count: 395,
					minPrice: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
				},
				{
					name: "Hahnair Technologies",
					logoUrl: "https://r-xx.bstatic.com/data/airlines_logo/X1.png",
					iataCode: "X1",
					count: 24,
					minPrice: {
						currencyCode: "NGN",
						units: 2384115,
						nanos: 960000000,
					},
				},
				{
					name: "Euroairlines",
					logoUrl: "https://r-xx.bstatic.com/data/airlines_logo/Q4.png",
					iataCode: "Q4",
					count: 33,
					minPrice: {
						currencyCode: "NGN",
						units: 2307276,
						nanos: 720000000,
					},
				},
				{
					name: "Hahnair Systems",
					logoUrl: "https://r-xx.bstatic.com/data/airlines_logo/H1.png",
					iataCode: "H1",
					count: 28,
					minPrice: {
						currencyCode: "NGN",
						units: 4082272,
						nanos: 360000000,
					},
				},
				{
					name: "Africa World Airlines",
					logoUrl: "https://r-xx.bstatic.com/data/airlines_logo/AW.png",
					iataCode: "AW",
					count: 24,
					minPrice: {
						currencyCode: "NGN",
						units: 2307276,
						nanos: 720000000,
					},
				},
				{
					name: "Asky",
					logoUrl: "https://r-xx.bstatic.com/data/airlines_logo/KP.png",
					iataCode: "KP",
					count: 11,
					minPrice: {
						currencyCode: "NGN",
						units: 3181916,
						nanos: 920000000,
					},
				},
			],
			departureIntervals: [
				{
					start: "06:30",
					end: "20:45",
				},
				{
					start: "06:15",
					end: "21:35",
				},
			],
			flightTimes: [
				{
					arrival: [
						{
							start: "00:00",
							end: "05:59",
							count: 0,
						},
						{
							start: "06:00",
							end: "11:59",
							count: 70,
						},
						{
							start: "12:00",
							end: "17:59",
							count: 105,
						},
						{
							start: "18:00",
							end: "23:59",
							count: 222,
						},
					],
					departure: [
						{
							start: "00:00",
							end: "05:59",
							count: 0,
						},
						{
							start: "06:00",
							end: "11:59",
							count: 143,
						},
						{
							start: "12:00",
							end: "17:59",
							count: 127,
						},
						{
							start: "18:00",
							end: "23:59",
							count: 127,
						},
					],
				},
				{
					arrival: [
						{
							start: "00:00",
							end: "05:59",
							count: 0,
						},
						{
							start: "06:00",
							end: "11:59",
							count: 151,
						},
						{
							start: "12:00",
							end: "17:59",
							count: 196,
						},
						{
							start: "18:00",
							end: "23:59",
							count: 50,
						},
					],
					departure: [
						{
							start: "00:00",
							end: "05:59",
							count: 0,
						},
						{
							start: "06:00",
							end: "11:59",
							count: 166,
						},
						{
							start: "12:00",
							end: "17:59",
							count: 184,
						},
						{
							start: "18:00",
							end: "23:59",
							count: 47,
						},
					],
				},
			],
			shortLayoverConnection: {
				count: 28,
			},
			durationMin: 2,
			durationMax: 27,
			minPrice: {
				currencyCode: "NGN",
				units: 436101,
				nanos: 770000000,
			},
			minRoundPrice: {
				currencyCode: "NGN",
				units: 436760,
				nanos: 740000000,
			},
			minPriceFiltered: {
				currencyCode: "NGN",
				units: 436101,
				nanos: 770000000,
			},
			baggage: [
				{
					paramName: "includedBaggage",
					count: 251,
					enabled: true,
					baggageType: "CHECKIN",
				},
			],
			budget: {
				paramName: "maxBudget",
				min: {
					currencyCode: "NGN",
					units: 436101,
					nanos: 770000000,
				},
				max: {
					currencyCode: "NGN",
					units: 7204513,
					nanos: 970000000,
				},
			},
			budgetPerAdult: {
				paramName: "maxBudgetPerAdult",
				min: {
					currencyCode: "NGN",
					units: 180604,
					nanos: 400000000,
				},
				max: {
					currencyCode: "NGN",
					units: 2402184,
					nanos: 60000000,
				},
			},
			duration: [
				{
					min: 2,
					max: 27,
					durationType: "JOURNEY",
					enabled: true,
					paramName: "maxDuration",
				},
				{
					min: 1,
					max: 24,
					durationType: "LAYOVER",
					enabled: true,
					paramName: "maxLayoverDuration",
				},
			],
			filtersOrder: ["stops", "airlines", "flightTimes", "duration"],
		},
		flightOffers: [
			{
				token:
					"d6a1f_H4sIAAAAAAAA_y2QbY-iMBSFf41-GgrlxQ6TNBsEVFxeVGAcPjVYKzLjWJd2osuv3wqb3pzz3NPbNO1Zypt40_XTpW3OUmg_AjRc8qaWDFD-rZ86JQfOv9pro9dtp3vz9zjLIQpCH6K1l-rwBaIXQ9fUom_VL1bfWtCBEw4_inCXejEpdtGGbHaRH6XLKXtITXQUT9sDAzXWXNcdUVC8_E8dngE7K5ZhnFhDRLnENnDmMFo41mI7H8MOr6xgYY4jR5z490fWeyIpxD0OPJTkz74046Aysv7dT8rLMi3SeVa-irSMHnlZwcQIneJTVtuvSuzD9TIOQlgGFYqLdRX7cFX4d5lsJ1agariGUYohADZy4dDzWmDojEglNl9HPEqcZ4kRjS_izw3bQUPzwNByDGMq2IVR2fLrb_YXb2wETVdTv8qoaWspGYKZCtb11XS0dGL6cOa29_6qaGJ5qhpiAEP5WTlUXpN9BFKk6EDcXBklK6VHYiMLPgcZ0eABzRSdiK20JRDA4egnifbKeoLonxvv_wGDxy3oFAIAAA..",
				segments: [
					{
						departureAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2024-12-17T19:30:00",
						arrivalTime: "2024-12-17T20:50:00",
						legs: [
							{
								departureTime: "2024-12-17T19:30:00",
								arrivalTime: "2024-12-17T20:50:00",
								departureAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7129,
									planeType: "320",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "A320",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
					{
						departureAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2025-01-17T13:55:00",
						arrivalTime: "2025-01-17T15:05:00",
						legs: [
							{
								departureTime: "2025-01-17T13:55:00",
								arrivalTime: "2025-01-17T15:05:00",
								departureAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7126,
									planeType: "738",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4200,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4200,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
				],
				priceBreakdown: {
					total: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
					baseFare: {
						currencyCode: "NGN",
						units: 222165,
						nanos: 630000000,
					},
					fee: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					tax: {
						currencyCode: "NGN",
						units: 213936,
						nanos: 140000000,
					},
					totalRounded: {
						currencyCode: "NGN",
						nanos: 740000000,
						units: 436760,
					},
					moreTaxesAndFees: {},
					discount: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					totalWithoutDiscount: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
					totalWithoutDiscountRounded: {
						currencyCode: "NGN",
						nanos: 740000000,
						units: 436760,
					},
					carrierTaxBreakdown: [
						{
							carrier: {
								name: "Hahnair",
								code: "HR",
								logo: "https://r-xx.bstatic.com/data/airlines_logo/HR.png",
							},
							avgPerAdult: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							avgPerChild: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							avgPerInfant: {
								currencyCode: "NGN",
								units: 66203,
								nanos: 730000000,
							},
						},
					],
				},
				travellerPrices: [
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106738,
								nanos: 190000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "1",
						travellerType: "ADULT",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106753,
								nanos: 520000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "2",
						travellerType: "KID",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 8673,
								nanos: 920000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 66203,
								nanos: 730000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
						},
						travellerReference: "3",
						travellerType: "KID",
					},
				],
				priceDisplayRequirements: [],
				pointOfSale: "us",
				tripType: "ROUNDTRIP",
				posMismatch: {
					detectedPointOfSale: "us",
					isPOSMismatch: false,
					offerSalesCountry: "us",
				},
				includedProductsBySegment: [
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
				],
				includedProducts: {
					areAllSegmentsIdentical: true,
					segments: [
						[
							{
								luggageType: "PERSONAL_ITEM",
								maxPiece: 2,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 22.1,
								massUnit: "LB",
								maxPiece: 1,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 33.1,
								massUnit: "LB",
								maxPiece: 2,
								piecePerPax: 1,
							},
						],
					],
				},
				extraProducts: [
					{
						type: "flexibleTicket",
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
						},
					},
				],
				offerExtras: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 880000000,
								units: 30649,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 880000000,
								units: 30649,
							},
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				ancillaries: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
						},
						preSelected: false,
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				brandedFareInfo: {
					fareName: "Standard",
					features: [
						{
							featureName: "PERSONAL_BAGGAGE",
							category: "BAGGAGE",
							code: "BK03",
							label: "2 personal items",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "1 checked bag (22.1 lbs)",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "2 checked bags (33.1 lbs each)",
							availability: "INCLUDED",
						},
					],
					fareAttributes: [],
					nonIncludedFeaturesRequired: false,
					nonIncludedFeatures: [],
				},
				appliedDiscounts: [],
				offerKeyToHighlight: "1_P47129_2_P47126",
				seatAvailability: {
					numberOfSeatsAvailable: 4,
				},
				extraProductDisplayRequirements: {},
			},
			{
				token:
					"d6a1f_H4sIAAAAAAAA_y2QbY-iMBSFf41-GgrlxcokzQYBFZcXFRiHTw3WijiOdWknuv76rbDpzTnPPb1N056kvIl3XT9e2uYkhfYjQMMlb2rJAOXf-rFTsuf8q702et12ujf7iLMcoiD0IVp5qQ7fIHozdE0t-l79YvWtBR044vCzCLepF5NiG63Jehv5UboYs4fUREfxuN0zUGPNdd0BBcWL_9ThCbCzYhHGidVHlEtsA2cGo7ljzeP5EHZ4aQVzcxg54MS_P7KnJ5JC3OPAQ0n-6kszDioje374SXlZpEU6y8qpSMvokZcVTIzQKc6y2nxVYheuFnEQwjKoUFysqtiHy8K_y2QzsgJV_TWMUgwBsJEL-57XAkNnQCqxOR3wIHGeJUY0vIi_NmwH9c0DQ8sxjLFgF0Zly6-_2V-8thE0XU39KqOmraXkFVimClb11XS0dGT6cDKFZ8YVjSxPVUMMYCg_KYfKa7KLwMZVtCduroySpdIDsZEFX4OMaHCPJoqOxFbaEghgf_RMop2yJ0H0z40__wHml-vIFAIAAA..",
				segments: [
					{
						departureAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2024-12-17T19:30:00",
						arrivalTime: "2024-12-17T20:50:00",
						legs: [
							{
								departureTime: "2024-12-17T19:30:00",
								arrivalTime: "2024-12-17T20:50:00",
								departureAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7129,
									planeType: "320",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "A320",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
					{
						departureAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2025-01-17T15:45:00",
						arrivalTime: "2025-01-17T17:00:00",
						legs: [
							{
								departureTime: "2025-01-17T15:45:00",
								arrivalTime: "2025-01-17T17:00:00",
								departureAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7132,
									planeType: "737",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4500,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4500,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
				],
				priceBreakdown: {
					total: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
					baseFare: {
						currencyCode: "NGN",
						units: 222165,
						nanos: 630000000,
					},
					fee: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					tax: {
						currencyCode: "NGN",
						units: 213936,
						nanos: 140000000,
					},
					totalRounded: {
						currencyCode: "NGN",
						nanos: 740000000,
						units: 436760,
					},
					moreTaxesAndFees: {},
					discount: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					totalWithoutDiscount: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
					totalWithoutDiscountRounded: {
						currencyCode: "NGN",
						nanos: 740000000,
						units: 436760,
					},
					carrierTaxBreakdown: [
						{
							carrier: {
								name: "Hahnair",
								code: "HR",
								logo: "https://r-xx.bstatic.com/data/airlines_logo/HR.png",
							},
							avgPerAdult: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							avgPerChild: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							avgPerInfant: {
								currencyCode: "NGN",
								units: 66203,
								nanos: 730000000,
							},
						},
					],
				},
				travellerPrices: [
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106738,
								nanos: 190000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "1",
						travellerType: "ADULT",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106753,
								nanos: 520000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "2",
						travellerType: "KID",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 8673,
								nanos: 920000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 66203,
								nanos: 730000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
						},
						travellerReference: "3",
						travellerType: "KID",
					},
				],
				priceDisplayRequirements: [],
				pointOfSale: "us",
				tripType: "ROUNDTRIP",
				posMismatch: {
					detectedPointOfSale: "us",
					isPOSMismatch: false,
					offerSalesCountry: "us",
				},
				includedProductsBySegment: [
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
				],
				includedProducts: {
					areAllSegmentsIdentical: true,
					segments: [
						[
							{
								luggageType: "PERSONAL_ITEM",
								maxPiece: 2,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 22.1,
								massUnit: "LB",
								maxPiece: 1,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 33.1,
								massUnit: "LB",
								maxPiece: 2,
								piecePerPax: 1,
							},
						],
					],
				},
				extraProducts: [
					{
						type: "flexibleTicket",
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
						},
					},
				],
				offerExtras: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 880000000,
								units: 30649,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 880000000,
								units: 30649,
							},
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				ancillaries: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
						},
						preSelected: false,
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				brandedFareInfo: {
					fareName: "Standard",
					features: [
						{
							featureName: "PERSONAL_BAGGAGE",
							category: "BAGGAGE",
							code: "BK03",
							label: "2 personal items",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "1 checked bag (22.1 lbs)",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "2 checked bags (33.1 lbs each)",
							availability: "INCLUDED",
						},
					],
					fareAttributes: [],
					nonIncludedFeaturesRequired: false,
					nonIncludedFeatures: [],
				},
				appliedDiscounts: [],
				offerKeyToHighlight: "1_P47129_2_P47132",
				seatAvailability: {
					numberOfSeatsAvailable: 4,
				},
				extraProductDisplayRequirements: {},
			},
			{
				token:
					"d6a1f_H4sIAAAAAAAA_y1QW4-iMBT-Nfo0lJaLHSZpNgiIuFwcAR2eGqyIzDjWpZ3o-uu3wqYn3-2cppeTlFfxpuvHc9eepNB-BGi55G0tG8D4t37sFew5_-ourV53ve7Ot3GWI-wHHsIrN9XRC8IvUNfUYm_Vr6a-dqAHRxJ8FMEmdWNabKI1XW8iL0rDaXOXmugZmXb7BtREcxxnlIKR8L_qyQxYWREGcWIOEeOSWMCeo2hhm4vIHsOeLE1_YYwjB5J4t3v2cEVSiFvsuzjJn740Yr-C2WPrJeU5TIt0npWvIi2je15WKIGBXXzK6v2rErtgFcZ-gEq_wnGxqmIPLQvvJpP3iemrGo5pGCMIAAs7aPC8FgSN9-FMEuN1lAdJ8iyB0fgi_mxYNh7MnSDThnAqmnPDZMcvv5u_ZG1hZDia-tWGGZaW0mdgQhWs6otha-nE8NAMI3gxlJqYrqqWQgAVnxQjxTXdRWCbKbWnTq6I0aXCA7WwiZ6DDdXQHs-UOlJLYUcRQMPWTxrtFD0oZn-u_PEPs7rmmRQCAAA.",
				segments: [
					{
						departureAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2024-12-17T19:30:00",
						arrivalTime: "2024-12-17T20:50:00",
						legs: [
							{
								departureTime: "2024-12-17T19:30:00",
								arrivalTime: "2024-12-17T20:50:00",
								departureAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7129,
									planeType: "320",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "A320",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
					{
						departureAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2025-01-17T19:00:00",
						arrivalTime: "2025-01-17T20:20:00",
						legs: [
							{
								departureTime: "2025-01-17T19:00:00",
								arrivalTime: "2025-01-17T20:20:00",
								departureAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7130,
									planeType: "733",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
				],
				priceBreakdown: {
					total: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
					baseFare: {
						currencyCode: "NGN",
						units: 222165,
						nanos: 630000000,
					},
					fee: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					tax: {
						currencyCode: "NGN",
						units: 213936,
						nanos: 140000000,
					},
					totalRounded: {
						currencyCode: "NGN",
						nanos: 740000000,
						units: 436760,
					},
					moreTaxesAndFees: {},
					discount: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					totalWithoutDiscount: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
					totalWithoutDiscountRounded: {
						currencyCode: "NGN",
						nanos: 740000000,
						units: 436760,
					},
					carrierTaxBreakdown: [
						{
							carrier: {
								name: "Hahnair",
								code: "HR",
								logo: "https://r-xx.bstatic.com/data/airlines_logo/HR.png",
							},
							avgPerAdult: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							avgPerChild: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							avgPerInfant: {
								currencyCode: "NGN",
								units: 66203,
								nanos: 730000000,
							},
						},
					],
				},
				travellerPrices: [
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106738,
								nanos: 190000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "1",
						travellerType: "ADULT",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106753,
								nanos: 520000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "2",
						travellerType: "KID",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 8673,
								nanos: 920000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 66203,
								nanos: 730000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
						},
						travellerReference: "3",
						travellerType: "KID",
					},
				],
				priceDisplayRequirements: [],
				pointOfSale: "us",
				tripType: "ROUNDTRIP",
				posMismatch: {
					detectedPointOfSale: "us",
					isPOSMismatch: false,
					offerSalesCountry: "us",
				},
				includedProductsBySegment: [
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
				],
				includedProducts: {
					areAllSegmentsIdentical: true,
					segments: [
						[
							{
								luggageType: "PERSONAL_ITEM",
								maxPiece: 2,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 22.1,
								massUnit: "LB",
								maxPiece: 1,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 33.1,
								massUnit: "LB",
								maxPiece: 2,
								piecePerPax: 1,
							},
						],
					],
				},
				extraProducts: [
					{
						type: "flexibleTicket",
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
						},
					},
				],
				offerExtras: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 880000000,
								units: 30649,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 880000000,
								units: 30649,
							},
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				ancillaries: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
						},
						preSelected: false,
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				brandedFareInfo: {
					fareName: "Standard",
					features: [
						{
							featureName: "PERSONAL_BAGGAGE",
							category: "BAGGAGE",
							code: "BK03",
							label: "2 personal items",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "1 checked bag (22.1 lbs)",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "2 checked bags (33.1 lbs each)",
							availability: "INCLUDED",
						},
					],
					fareAttributes: [],
					nonIncludedFeaturesRequired: false,
					nonIncludedFeatures: [],
				},
				appliedDiscounts: [],
				offerKeyToHighlight: "1_P47129_2_P47130",
				seatAvailability: {
					numberOfSeatsAvailable: 4,
				},
				extraProductDisplayRequirements: {},
			},
			{
				token:
					"d6a1f_H4sIAAAAAAAA_y2QbY-iMBSFf41-GgrlxcokzQYBEZcXFRiHTw1WQBzHurQTXX_9Vtj05pznnt6maU9C3Pi7qjaXrj0Jrvxw0DLB2krUgLJvtemlHBj76q6tWnW96iw-ojSDyPNdiNZOosI3iN40VZGLvpe_6urWgR402P_M_V3iRCTfhRuy2YVumATT-iEU3lM87Q41qLBi2_aInOLgP_V4Bsw0D_woNoaIMoFNYC1guLSM5TYewx6vDG-pjyNHHLv3R_p0eJzze-Q5KM5efaFHXqmlzw83Li5BkieLtJjzpAgfWVHCWPOt_CzK7VfJ9_46iDwfFl6JonxdRi5c5e5dxNuJ4ckarqkpxRAAE9lw6FnFMbRGpALr8xGPAmdprIXji9hrw7TQ0DwwNCxNm_L6UlPRsevv-i_emAjqtiJ_taa6qSRkCOYyWFdX3VKSie7CWXVuelvSxHBktUQDmvSTdCi9IvsQ5JGkA7EzaZSspB6JiQz4GqyJAg9oJqkhptSOQACHo2cS7qU9CaJ_buz5D3lqk4EUAgAA",
				segments: [
					{
						departureAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2024-12-17T19:30:00",
						arrivalTime: "2024-12-17T20:50:00",
						legs: [
							{
								departureTime: "2024-12-17T19:30:00",
								arrivalTime: "2024-12-17T20:50:00",
								departureAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7129,
									planeType: "320",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "A320",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
					{
						departureAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2025-01-17T17:45:00",
						arrivalTime: "2025-01-17T19:05:00",
						legs: [
							{
								departureTime: "2025-01-17T17:45:00",
								arrivalTime: "2025-01-17T19:05:00",
								departureAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7128,
									planeType: "320",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "A320",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
				],
				priceBreakdown: {
					total: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
					baseFare: {
						currencyCode: "NGN",
						units: 222165,
						nanos: 630000000,
					},
					fee: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					tax: {
						currencyCode: "NGN",
						units: 213936,
						nanos: 140000000,
					},
					totalRounded: {
						currencyCode: "NGN",
						nanos: 740000000,
						units: 436760,
					},
					moreTaxesAndFees: {},
					discount: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					totalWithoutDiscount: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
					totalWithoutDiscountRounded: {
						currencyCode: "NGN",
						nanos: 740000000,
						units: 436760,
					},
					carrierTaxBreakdown: [
						{
							carrier: {
								name: "Hahnair",
								code: "HR",
								logo: "https://r-xx.bstatic.com/data/airlines_logo/HR.png",
							},
							avgPerAdult: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							avgPerChild: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							avgPerInfant: {
								currencyCode: "NGN",
								units: 66203,
								nanos: 730000000,
							},
						},
					],
				},
				travellerPrices: [
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106738,
								nanos: 190000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "1",
						travellerType: "ADULT",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106753,
								nanos: 520000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "2",
						travellerType: "KID",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 8673,
								nanos: 920000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 66203,
								nanos: 730000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
						},
						travellerReference: "3",
						travellerType: "KID",
					},
				],
				priceDisplayRequirements: [],
				pointOfSale: "us",
				tripType: "ROUNDTRIP",
				posMismatch: {
					detectedPointOfSale: "us",
					isPOSMismatch: false,
					offerSalesCountry: "us",
				},
				includedProductsBySegment: [
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
				],
				includedProducts: {
					areAllSegmentsIdentical: true,
					segments: [
						[
							{
								luggageType: "PERSONAL_ITEM",
								maxPiece: 2,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 22.1,
								massUnit: "LB",
								maxPiece: 1,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 33.1,
								massUnit: "LB",
								maxPiece: 2,
								piecePerPax: 1,
							},
						],
					],
				},
				extraProducts: [
					{
						type: "flexibleTicket",
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
						},
					},
				],
				offerExtras: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 880000000,
								units: 30649,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 880000000,
								units: 30649,
							},
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				ancillaries: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
						},
						preSelected: false,
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				brandedFareInfo: {
					fareName: "Standard",
					features: [
						{
							featureName: "PERSONAL_BAGGAGE",
							category: "BAGGAGE",
							code: "BK03",
							label: "2 personal items",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "1 checked bag (22.1 lbs)",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "2 checked bags (33.1 lbs each)",
							availability: "INCLUDED",
						},
					],
					fareAttributes: [],
					nonIncludedFeaturesRequired: false,
					nonIncludedFeatures: [],
				},
				appliedDiscounts: [],
				offerKeyToHighlight: "1_P47129_2_P47128",
				seatAvailability: {
					numberOfSeatsAvailable: 4,
				},
				extraProductDisplayRequirements: {},
			},
			{
				token:
					"d6a1f_H4sIAAAAAAAA_y2Qa3OiMBiFf41-KoFwMdKZTAcBEcvFCtTyKYMxIq1rXJIdXX_9RtjJO-8550kyuZykvIpXXT-eu_YkhfZHgJZL3jaSAcp_6cdetT3nP92l1Zuu173FZ5IXEAWhD9Hay3T4AtGLoWtq0Nf6jTXXDvTgiMOvMtxmXkLKbbwhm23sx1k0ZXepiZ7iabdnoMGa67qjFRRH_12PZ8DOyyhMUmtAlEtsA2cB46VjLZfzEfZ4ZQVLc1xywKl_u-cPT6SluCWBh9LimSszCWojf3z6aXWOsjJb5NVcZFV8L6oapkbolN-y_vipxS5cR0kQwiqoUVKu68SHq9K_yfRjYgWqhmMYpRgCYCMXDpk3AkNntFRic7waP0hc5KkRjy_izwnbQUO4Y2g5hjEV7Myo7Pjlnf3FGxtB09XUrzJq2lpGBmArsG4upqNlE9OHs3nH5lC5ieWpaokBDKUnpVBpQ3YxeH-SPXELJZSsVD8QG1nwiRnR4B7NlDsSW_WOQACHrd8k3il5EER_X_njH2H9AZoUAgAA",
				segments: [
					{
						departureAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2024-12-17T19:30:00",
						arrivalTime: "2024-12-17T20:50:00",
						legs: [
							{
								departureTime: "2024-12-17T19:30:00",
								arrivalTime: "2024-12-17T20:50:00",
								departureAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7129,
									planeType: "320",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "A320",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
					{
						departureAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2025-01-17T12:00:00",
						arrivalTime: "2025-01-17T13:20:00",
						legs: [
							{
								departureTime: "2025-01-17T12:00:00",
								arrivalTime: "2025-01-17T13:20:00",
								departureAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7124,
									planeType: "735",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
				],
				priceBreakdown: {
					total: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
					baseFare: {
						currencyCode: "NGN",
						units: 222165,
						nanos: 630000000,
					},
					fee: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					tax: {
						currencyCode: "NGN",
						units: 213936,
						nanos: 140000000,
					},
					totalRounded: {
						currencyCode: "NGN",
						nanos: 740000000,
						units: 436760,
					},
					moreTaxesAndFees: {},
					discount: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					totalWithoutDiscount: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
					totalWithoutDiscountRounded: {
						currencyCode: "NGN",
						nanos: 740000000,
						units: 436760,
					},
					carrierTaxBreakdown: [
						{
							carrier: {
								name: "Hahnair",
								code: "HR",
								logo: "https://r-xx.bstatic.com/data/airlines_logo/HR.png",
							},
							avgPerAdult: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							avgPerChild: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							avgPerInfant: {
								currencyCode: "NGN",
								units: 66203,
								nanos: 730000000,
							},
						},
					],
				},
				travellerPrices: [
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106738,
								nanos: 190000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "1",
						travellerType: "ADULT",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106753,
								nanos: 520000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "2",
						travellerType: "KID",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 8673,
								nanos: 920000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 66203,
								nanos: 730000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
						},
						travellerReference: "3",
						travellerType: "KID",
					},
				],
				priceDisplayRequirements: [],
				pointOfSale: "us",
				tripType: "ROUNDTRIP",
				posMismatch: {
					detectedPointOfSale: "us",
					isPOSMismatch: false,
					offerSalesCountry: "us",
				},
				includedProductsBySegment: [
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
				],
				includedProducts: {
					areAllSegmentsIdentical: true,
					segments: [
						[
							{
								luggageType: "PERSONAL_ITEM",
								maxPiece: 2,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 22.1,
								massUnit: "LB",
								maxPiece: 1,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 33.1,
								massUnit: "LB",
								maxPiece: 2,
								piecePerPax: 1,
							},
						],
					],
				},
				extraProducts: [
					{
						type: "flexibleTicket",
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
						},
					},
				],
				offerExtras: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 880000000,
								units: 30649,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 880000000,
								units: 30649,
							},
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				ancillaries: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
						},
						preSelected: false,
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				brandedFareInfo: {
					fareName: "Standard",
					features: [
						{
							featureName: "PERSONAL_BAGGAGE",
							category: "BAGGAGE",
							code: "BK03",
							label: "2 personal items",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "1 checked bag (22.1 lbs)",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "2 checked bags (33.1 lbs each)",
							availability: "INCLUDED",
						},
					],
					fareAttributes: [],
					nonIncludedFeaturesRequired: false,
					nonIncludedFeatures: [],
				},
				appliedDiscounts: [],
				offerKeyToHighlight: "1_P47129_2_P47124",
				seatAvailability: {
					numberOfSeatsAvailable: 4,
				},
				extraProductDisplayRequirements: {},
			},
			{
				token:
					"d6a1f_H4sIAAAAAAAA_y2QbZOaMBSFf41-WgLhxSw7k-kgIGJ5cQXW8imDMSC71liSVuuvb4RO7pzz3JObySQnKa_iTdfbc9-dpNB-C9BxybtGMkD5T70dlBw4_-ovnd70g-4tP5K8gCgIfYg2XqbDF4heDF1Ti77V31hz7cEAWhz-KMNd5iWk3MVbst3FfpxFc3aXmhgonvcHBhqsua47oaA4-k8DXgA7L6MwSa0xolxiGzhLGK8caxUZUzjgtRWszGnkiFP_ds8fnkhLcUsCD6XFs6_MJKiN_PHhp9U5yspsmVevIqvie1HVMDVCp_yU9ftXLfbhJkqCEFZBjZJyUyc-XJf-TabvMytQNV7DKMUQABu5cOx5IzB0JqQSm68THiUu8tSIpxfx54btoLG5Y2g5hjEX7Myo7PnlO_uLtzaCpqupX2XUtLWMjIGpgk1zMR0tm5k-XKDTn65VNLM8VR0xgKH8pBwqb8g-ButM0YG4hTJK1kqPxEYWfA4yosEDWihqia20JxDA8egniffKHgTRX1f--Ac_NddVFAIAAA..",
				segments: [
					{
						departureAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2024-12-17T19:30:00",
						arrivalTime: "2024-12-17T20:50:00",
						legs: [
							{
								departureTime: "2024-12-17T19:30:00",
								arrivalTime: "2024-12-17T20:50:00",
								departureAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7129,
									planeType: "320",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "A320",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
					{
						departureAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2025-01-17T10:35:00",
						arrivalTime: "2025-01-17T11:55:00",
						legs: [
							{
								departureTime: "2025-01-17T10:35:00",
								arrivalTime: "2025-01-17T11:55:00",
								departureAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7122,
									planeType: "738",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
				],
				priceBreakdown: {
					total: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
					baseFare: {
						currencyCode: "NGN",
						units: 222165,
						nanos: 630000000,
					},
					fee: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					tax: {
						currencyCode: "NGN",
						units: 213936,
						nanos: 140000000,
					},
					totalRounded: {
						currencyCode: "NGN",
						nanos: 740000000,
						units: 436760,
					},
					moreTaxesAndFees: {},
					discount: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					totalWithoutDiscount: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
					totalWithoutDiscountRounded: {
						currencyCode: "NGN",
						nanos: 740000000,
						units: 436760,
					},
					carrierTaxBreakdown: [
						{
							carrier: {
								name: "Hahnair",
								code: "HR",
								logo: "https://r-xx.bstatic.com/data/airlines_logo/HR.png",
							},
							avgPerAdult: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							avgPerChild: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							avgPerInfant: {
								currencyCode: "NGN",
								units: 66203,
								nanos: 730000000,
							},
						},
					],
				},
				travellerPrices: [
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106738,
								nanos: 190000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "1",
						travellerType: "ADULT",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106753,
								nanos: 520000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "2",
						travellerType: "KID",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 8673,
								nanos: 920000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 66203,
								nanos: 730000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
						},
						travellerReference: "3",
						travellerType: "KID",
					},
				],
				priceDisplayRequirements: [],
				pointOfSale: "us",
				tripType: "ROUNDTRIP",
				posMismatch: {
					detectedPointOfSale: "us",
					isPOSMismatch: false,
					offerSalesCountry: "us",
				},
				includedProductsBySegment: [
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
				],
				includedProducts: {
					areAllSegmentsIdentical: true,
					segments: [
						[
							{
								luggageType: "PERSONAL_ITEM",
								maxPiece: 2,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 22.1,
								massUnit: "LB",
								maxPiece: 1,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 33.1,
								massUnit: "LB",
								maxPiece: 2,
								piecePerPax: 1,
							},
						],
					],
				},
				extraProducts: [
					{
						type: "flexibleTicket",
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
						},
					},
				],
				offerExtras: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 880000000,
								units: 30649,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 880000000,
								units: 30649,
							},
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				ancillaries: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
						},
						preSelected: false,
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				brandedFareInfo: {
					fareName: "Standard",
					features: [
						{
							featureName: "PERSONAL_BAGGAGE",
							category: "BAGGAGE",
							code: "BK03",
							label: "2 personal items",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "1 checked bag (22.1 lbs)",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "2 checked bags (33.1 lbs each)",
							availability: "INCLUDED",
						},
					],
					fareAttributes: [],
					nonIncludedFeaturesRequired: false,
					nonIncludedFeatures: [],
				},
				appliedDiscounts: [],
				offerKeyToHighlight: "1_P47129_2_P47122",
				seatAvailability: {
					numberOfSeatsAvailable: 4,
				},
				extraProductDisplayRequirements: {},
			},
			{
				token:
					"d6a1f_H4sIAAAAAAAA_y2QbY-iMBSFf41-GgqFYodJmg0CIi4vjsC4fGqgojLjWJd2I-uv3wqb3pzz3NPbNO1Zypt40_XjpTudpdD-CHDikp9q2QLGv_Vjr6Th_Ku7nvS663V3-RFnOcR-4EG8cVMdvkD8YuiaWuyt-tHWtw704EiCX0WwS92YFrtoS7e7yIvScN4OUhM9I_OuaUFNNMdxJhSMhP-pJwuAsiIM4sQaI8YlQcBewmhlW6uwmsKerC1_ZU4jB5J49yF7uCIpxD32XZzkz740Y78ysseHl5SXMC3SZVa-irSMhrysYGIEdvEpq_evSuyDTRj7ASz9CsfFpoo9uC68u0zeZ5avarymZYxAABB24NjzWhBoT8gkMV8nPEiSZ4kRTS_izw1k47EZCLRsw5iL9tIy2fHrz_Yv2SIMTUdTv9oyE2kpVQFCSAWb-mraWjozPbho2MC_Fc0sV9WJGsBQflYOldd0HwEvUtRQJ1fG6FrpgSJswedgSzXY4IWiI0VKOwoBHI9-0miv7EEx-33jj3_bBiS_FAIAAA..",
				segments: [
					{
						departureAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2024-12-17T19:30:00",
						arrivalTime: "2024-12-17T20:50:00",
						legs: [
							{
								departureTime: "2024-12-17T19:30:00",
								arrivalTime: "2024-12-17T20:50:00",
								departureAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7129,
									planeType: "320",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "A320",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
					{
						departureAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2025-01-17T07:30:00",
						arrivalTime: "2025-01-17T08:50:00",
						legs: [
							{
								departureTime: "2025-01-17T07:30:00",
								arrivalTime: "2025-01-17T08:50:00",
								departureAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7444,
									planeType: "737",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
				],
				priceBreakdown: {
					total: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
					baseFare: {
						currencyCode: "NGN",
						units: 222165,
						nanos: 630000000,
					},
					fee: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					tax: {
						currencyCode: "NGN",
						units: 213936,
						nanos: 140000000,
					},
					totalRounded: {
						currencyCode: "NGN",
						nanos: 740000000,
						units: 436760,
					},
					moreTaxesAndFees: {},
					discount: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					totalWithoutDiscount: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
					totalWithoutDiscountRounded: {
						currencyCode: "NGN",
						nanos: 740000000,
						units: 436760,
					},
					carrierTaxBreakdown: [
						{
							carrier: {
								name: "Hahnair",
								code: "HR",
								logo: "https://r-xx.bstatic.com/data/airlines_logo/HR.png",
							},
							avgPerAdult: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							avgPerChild: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							avgPerInfant: {
								currencyCode: "NGN",
								units: 66203,
								nanos: 730000000,
							},
						},
					],
				},
				travellerPrices: [
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106738,
								nanos: 190000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "1",
						travellerType: "ADULT",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106753,
								nanos: 520000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "2",
						travellerType: "KID",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 8673,
								nanos: 920000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 66203,
								nanos: 730000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
						},
						travellerReference: "3",
						travellerType: "KID",
					},
				],
				priceDisplayRequirements: [],
				pointOfSale: "us",
				tripType: "ROUNDTRIP",
				posMismatch: {
					detectedPointOfSale: "us",
					isPOSMismatch: false,
					offerSalesCountry: "us",
				},
				includedProductsBySegment: [
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
				],
				includedProducts: {
					areAllSegmentsIdentical: true,
					segments: [
						[
							{
								luggageType: "PERSONAL_ITEM",
								maxPiece: 2,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 22.1,
								massUnit: "LB",
								maxPiece: 1,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 33.1,
								massUnit: "LB",
								maxPiece: 2,
								piecePerPax: 1,
							},
						],
					],
				},
				extraProducts: [
					{
						type: "flexibleTicket",
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
						},
					},
				],
				offerExtras: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 880000000,
								units: 30649,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 880000000,
								units: 30649,
							},
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				ancillaries: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
						},
						preSelected: false,
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				brandedFareInfo: {
					fareName: "Standard",
					features: [
						{
							featureName: "PERSONAL_BAGGAGE",
							category: "BAGGAGE",
							code: "BK03",
							label: "2 personal items",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "1 checked bag (22.1 lbs)",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "2 checked bags (33.1 lbs each)",
							availability: "INCLUDED",
						},
					],
					fareAttributes: [],
					nonIncludedFeaturesRequired: false,
					nonIncludedFeatures: [],
				},
				appliedDiscounts: [],
				offerKeyToHighlight: "1_P47129_2_P47444",
				seatAvailability: {
					numberOfSeatsAvailable: 4,
				},
				extraProductDisplayRequirements: {},
			},
			{
				token:
					"d6a1f_H4sIAAAAAAAA_y2Qa3OqMBCGf41-KoFwMaUzmTMIiFguVqAePmUwRqT1GEvS0frrG-FMdvZ99t3NZLJHKS_iRdcPp649SqF9C9ByydtGMkD5P_3Qq7Tj_LM7t3rT9bo3f0_yAqIg9CFaeZkOnyB6MnRNHfpS_2HNpQM9OODwbxluMi8h5SZek_Um9uMsmrKb1ERP8bTbMdBgzXXdEQXF0X_q8QzYeRmFSWoNFuUS28CZw3jhWIssGc0eL61gYY4je5z611t-90RaimsSeCgtHnVlJkFt5Pd3P61OUVZm87x6FlkV34qqhqkROuWHrN8-a7ENV1EShLAKapSUqzrx4bL0rzJ9m1iBiuEZRimGANjIhUPNG4GhMyKV2HwecS9xkadGPP6IPxq2g4bihqHlGMZUsBOjsuPnV_aD1zaCpquprTJq2lpGBsNQxqo5m46WTUwfzmZHtQhFE8tT0RIDGEqPSqHShmxj4FWKdsQtlFCyVHlPbGTBxyAjGtyhmaIDsVXuCARwuPpB4q2SO0H068Lvv4U607IUAgAA",
				segments: [
					{
						departureAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2024-12-17T19:30:00",
						arrivalTime: "2024-12-17T20:50:00",
						legs: [
							{
								departureTime: "2024-12-17T19:30:00",
								arrivalTime: "2024-12-17T20:50:00",
								departureAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7129,
									planeType: "320",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "A320",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
					{
						departureAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2025-01-17T06:30:00",
						arrivalTime: "2025-01-17T07:50:00",
						legs: [
							{
								departureTime: "2025-01-17T06:30:00",
								arrivalTime: "2025-01-17T07:50:00",
								departureAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7120,
									planeType: "738",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
				],
				priceBreakdown: {
					total: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
					baseFare: {
						currencyCode: "NGN",
						units: 222165,
						nanos: 630000000,
					},
					fee: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					tax: {
						currencyCode: "NGN",
						units: 213936,
						nanos: 140000000,
					},
					totalRounded: {
						currencyCode: "NGN",
						nanos: 740000000,
						units: 436760,
					},
					moreTaxesAndFees: {},
					discount: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					totalWithoutDiscount: {
						currencyCode: "NGN",
						units: 436101,
						nanos: 770000000,
					},
					totalWithoutDiscountRounded: {
						currencyCode: "NGN",
						nanos: 740000000,
						units: 436760,
					},
					carrierTaxBreakdown: [
						{
							carrier: {
								name: "Hahnair",
								code: "HR",
								logo: "https://r-xx.bstatic.com/data/airlines_logo/HR.png",
							},
							avgPerAdult: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							avgPerChild: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							avgPerInfant: {
								currencyCode: "NGN",
								units: 66203,
								nanos: 730000000,
							},
						},
					],
				},
				travellerPrices: [
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106738,
								nanos: 190000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "1",
						travellerType: "ADULT",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106753,
								nanos: 520000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "2",
						travellerType: "KID",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 8673,
								nanos: 920000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 66203,
								nanos: 730000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
						},
						travellerReference: "3",
						travellerType: "KID",
					},
				],
				priceDisplayRequirements: [],
				pointOfSale: "us",
				tripType: "ROUNDTRIP",
				posMismatch: {
					detectedPointOfSale: "us",
					isPOSMismatch: false,
					offerSalesCountry: "us",
				},
				includedProductsBySegment: [
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
				],
				includedProducts: {
					areAllSegmentsIdentical: true,
					segments: [
						[
							{
								luggageType: "PERSONAL_ITEM",
								maxPiece: 2,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 22.1,
								massUnit: "LB",
								maxPiece: 1,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 33.1,
								massUnit: "LB",
								maxPiece: 2,
								piecePerPax: 1,
							},
						],
					],
				},
				extraProducts: [
					{
						type: "flexibleTicket",
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
						},
					},
				],
				offerExtras: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 880000000,
								units: 30649,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 880000000,
								units: 30649,
							},
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				ancillaries: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 30527,
								nanos: 280000000,
							},
						},
						preSelected: false,
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				brandedFareInfo: {
					fareName: "Standard",
					features: [
						{
							featureName: "PERSONAL_BAGGAGE",
							category: "BAGGAGE",
							code: "BK03",
							label: "2 personal items",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "1 checked bag (22.1 lbs)",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "2 checked bags (33.1 lbs each)",
							availability: "INCLUDED",
						},
					],
					fareAttributes: [],
					nonIncludedFeaturesRequired: false,
					nonIncludedFeatures: [],
				},
				appliedDiscounts: [],
				offerKeyToHighlight: "1_P47129_2_P47120",
				seatAvailability: {
					numberOfSeatsAvailable: 4,
				},
				extraProductDisplayRequirements: {},
			},
			{
				token:
					"d6a1f_H4sIAAAAAAAA_y2QbW-yMBiFf41-GqXlRcaSZkFAhuPFCOr81NRagc3JRvtE5dc_FZY251znJHdzp7WUP-JF10_npqql0P4JULWyrajkgLXf-qlTcmjbr-ZS6bTpdG--TfICOUHoI2fpZTp6Qs4T1DV12Mv-ldOfBnTghMOPMlxnXkLKdbwiq3Xsx1k05TepiY7haXPggGLNdd0RBcPRH3V4Bqy8jMIkNYeKtRJbwJ6jeGGbi2wxlh1-M4t5EAzpiFP_est7T6SluCaB56TFI-9hEuxh3m_9dHOOsjKb5xvL2YXLKFnU_rq53rKtZ-R3eN_5V1lsnkVShhNzfJQzhhEAluOiIbdUYGSPyCQ2nkc8SlzkKYzH_R-7mo5pDOGGkWlDOBX8zJls2ss7v-OV5SATaeoPOTMsLSGPwpipYkkvhq1lE8NHdi_tr19FE9NTtyIQQOW1cqScEm8DMkfRgbiFMkbelB7JjFHKFHGiIT6zFJ3IQxuCABpGP0m8U9aT46Wv6e9_eSyeRwICAAA.",
				segments: [
					{
						departureAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2024-12-17T06:30:00",
						arrivalTime: "2024-12-17T07:50:00",
						legs: [
							{
								departureTime: "2024-12-17T06:30:00",
								arrivalTime: "2024-12-17T07:50:00",
								departureAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7131,
									planeType: "735",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
					{
						departureAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2025-01-17T13:55:00",
						arrivalTime: "2025-01-17T15:05:00",
						legs: [
							{
								departureTime: "2025-01-17T13:55:00",
								arrivalTime: "2025-01-17T15:05:00",
								departureAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7126,
									planeType: "738",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4200,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4200,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
				],
				priceBreakdown: {
					total: {
						currencyCode: "NGN",
						units: 670190,
						nanos: 200000000,
					},
					baseFare: {
						currencyCode: "NGN",
						units: 309900,
						nanos: 900000000,
					},
					fee: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					tax: {
						currencyCode: "NGN",
						units: 360289,
						nanos: 300000000,
					},
					totalRounded: {
						currencyCode: "NGN",
						nanos: 290000000,
						units: 671232,
					},
					moreTaxesAndFees: {},
					discount: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					totalWithoutDiscount: {
						currencyCode: "NGN",
						units: 670190,
						nanos: 200000000,
					},
					totalWithoutDiscountRounded: {
						currencyCode: "NGN",
						nanos: 290000000,
						units: 671232,
					},
					carrierTaxBreakdown: [
						{
							carrier: {
								name: "Hahnair",
								code: "HR",
								logo: "https://r-xx.bstatic.com/data/airlines_logo/HR.png",
							},
							avgPerAdult: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							avgPerChild: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							avgPerInfant: {
								currencyCode: "NGN",
								units: 66663,
								nanos: 480000000,
							},
						},
					],
				},
				travellerPrices: [
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 296077,
								nanos: 810000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 149264,
								nanos: 900000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 296077,
								nanos: 810000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
						},
						travellerReference: "1",
						travellerType: "ADULT",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 296093,
								nanos: 130000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 149280,
								nanos: 220000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 296093,
								nanos: 130000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
						},
						travellerReference: "2",
						travellerType: "KID",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 78019,
								nanos: 260000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 11355,
								nanos: 780000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 66663,
								nanos: 480000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 180000000,
								units: 78157,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 78019,
								nanos: 260000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 180000000,
								units: 78157,
							},
						},
						travellerReference: "3",
						travellerType: "KID",
					},
				],
				priceDisplayRequirements: [],
				pointOfSale: "us",
				tripType: "ROUNDTRIP",
				posMismatch: {
					detectedPointOfSale: "us",
					isPOSMismatch: false,
					offerSalesCountry: "us",
				},
				includedProductsBySegment: [
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
				],
				includedProducts: {
					areAllSegmentsIdentical: true,
					segments: [
						[
							{
								luggageType: "PERSONAL_ITEM",
								maxPiece: 2,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 22.1,
								massUnit: "LB",
								maxPiece: 1,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 33.1,
								massUnit: "LB",
								maxPiece: 2,
								piecePerPax: 1,
							},
						],
					],
				},
				extraProducts: [
					{
						type: "flexibleTicket",
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
						},
					},
				],
				offerExtras: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 310000000,
								units: 47507,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 310000000,
								units: 47507,
							},
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				ancillaries: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
						},
						preSelected: false,
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				brandedFareInfo: {
					fareName: "Standard",
					features: [
						{
							featureName: "PERSONAL_BAGGAGE",
							category: "BAGGAGE",
							code: "BK03",
							label: "2 personal items",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "1 checked bag (22.1 lbs)",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "2 checked bags (33.1 lbs each)",
							availability: "INCLUDED",
						},
					],
					fareAttributes: [],
					nonIncludedFeaturesRequired: false,
					nonIncludedFeatures: [],
				},
				appliedDiscounts: [],
				offerKeyToHighlight: "1_P47131_2_P47126",
				seatAvailability: {
					numberOfSeatsAvailable: 4,
				},
				extraProductDisplayRequirements: {},
			},
			{
				token:
					"d6a1f_H4sIAAAAAAAA_y2Q226jMBiEnya5KgZzCEsla0WAUlgDSYC2XFmO4xDabOhir5Lw9OvAyr9mvhnJ8uEk5bd41vXjuWtPUmh_BWh72bdUcsD63_pxULLv-6_u0uq0G3R__YaLErphFEA39XMdPkH3ydA1tdhz85PT7w4M4Iiijyra5T4m1S7ZkM0uCZI8XvKb1MTA0LLbc0CR5nnejIKh-D8NaAXsooojnFlTxXqJbOCsYfLiWC-pMZcDerXKdRhO6YCy4HorRl9klbji0Hez8pEbA4e1WYxvQVaf47zK10Vti7xObmXdwMyInGqUzfarEe9RGuMwgnXYuLhKGxzAtLpfZbZdWKGa6RjOGIIA2K4Hp9xTgaAzI5PI_DHjQaKyyIxkftHj9pZrmVO4IWg5hrEU_MyZ7PrLL35HG9uFFtTUr3Jm2homU2GqIqUX09HyhRlA574fxkHRwvLVtMQAhvKTcqicEr8GW0_RnnilMkZelR7IilHKFHGiQb6yFR3JQzsCAZy2fpLkXdlIDpfxRP_8AwulxqUUAgAA",
				segments: [
					{
						departureAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2024-12-17T06:30:00",
						arrivalTime: "2024-12-17T07:50:00",
						legs: [
							{
								departureTime: "2024-12-17T06:30:00",
								arrivalTime: "2024-12-17T07:50:00",
								departureAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7131,
									planeType: "735",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
					{
						departureAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2025-01-17T15:45:00",
						arrivalTime: "2025-01-17T17:00:00",
						legs: [
							{
								departureTime: "2025-01-17T15:45:00",
								arrivalTime: "2025-01-17T17:00:00",
								departureAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7132,
									planeType: "737",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4500,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4500,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
				],
				priceBreakdown: {
					total: {
						currencyCode: "NGN",
						units: 670190,
						nanos: 200000000,
					},
					baseFare: {
						currencyCode: "NGN",
						units: 309900,
						nanos: 900000000,
					},
					fee: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					tax: {
						currencyCode: "NGN",
						units: 360289,
						nanos: 300000000,
					},
					totalRounded: {
						currencyCode: "NGN",
						nanos: 290000000,
						units: 671232,
					},
					moreTaxesAndFees: {},
					discount: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					totalWithoutDiscount: {
						currencyCode: "NGN",
						units: 670190,
						nanos: 200000000,
					},
					totalWithoutDiscountRounded: {
						currencyCode: "NGN",
						nanos: 290000000,
						units: 671232,
					},
					carrierTaxBreakdown: [
						{
							carrier: {
								name: "Hahnair",
								code: "HR",
								logo: "https://r-xx.bstatic.com/data/airlines_logo/HR.png",
							},
							avgPerAdult: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							avgPerChild: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							avgPerInfant: {
								currencyCode: "NGN",
								units: 66663,
								nanos: 480000000,
							},
						},
					],
				},
				travellerPrices: [
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 296077,
								nanos: 810000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 149264,
								nanos: 900000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 296077,
								nanos: 810000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
						},
						travellerReference: "1",
						travellerType: "ADULT",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 296093,
								nanos: 130000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 149280,
								nanos: 220000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 296093,
								nanos: 130000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
						},
						travellerReference: "2",
						travellerType: "KID",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 78019,
								nanos: 260000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 11355,
								nanos: 780000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 66663,
								nanos: 480000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 180000000,
								units: 78157,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 78019,
								nanos: 260000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 180000000,
								units: 78157,
							},
						},
						travellerReference: "3",
						travellerType: "KID",
					},
				],
				priceDisplayRequirements: [],
				pointOfSale: "us",
				tripType: "ROUNDTRIP",
				posMismatch: {
					detectedPointOfSale: "us",
					isPOSMismatch: false,
					offerSalesCountry: "us",
				},
				includedProductsBySegment: [
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
				],
				includedProducts: {
					areAllSegmentsIdentical: true,
					segments: [
						[
							{
								luggageType: "PERSONAL_ITEM",
								maxPiece: 2,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 22.1,
								massUnit: "LB",
								maxPiece: 1,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 33.1,
								massUnit: "LB",
								maxPiece: 2,
								piecePerPax: 1,
							},
						],
					],
				},
				extraProducts: [
					{
						type: "flexibleTicket",
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
						},
					},
				],
				offerExtras: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 310000000,
								units: 47507,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 310000000,
								units: 47507,
							},
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				ancillaries: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
						},
						preSelected: false,
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				brandedFareInfo: {
					fareName: "Standard",
					features: [
						{
							featureName: "PERSONAL_BAGGAGE",
							category: "BAGGAGE",
							code: "BK03",
							label: "2 personal items",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "1 checked bag (22.1 lbs)",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "2 checked bags (33.1 lbs each)",
							availability: "INCLUDED",
						},
					],
					fareAttributes: [],
					nonIncludedFeaturesRequired: false,
					nonIncludedFeatures: [],
				},
				appliedDiscounts: [],
				offerKeyToHighlight: "1_P47131_2_P47132",
				seatAvailability: {
					numberOfSeatsAvailable: 4,
				},
				extraProductDisplayRequirements: {},
			},
			{
				token:
					"d6a1f_H4sIAAAAAAAA_y2QbW-CMBSFf41-GoVSkLGkWRCQsfFiBHV-amqtwOZko118-fUrsLQ55zk3t83NraX8Fk-6fjw1VS2F9itA1cq2opID1n7px07Jvm0_m3Ol06bTvfkmyQvoBKEPnVcv0-EDdB4MXVOHPe2eOf1uQAeOOHwvw1XmJaRcxUuyXMV-nEVTfpWa6BieNnsOKNZc1x1RMBz9U4dnwMrLKExSNJRYK7EF7DmMFzZaxGMf6_ALKuZBMKQDTv3LNb97Ii3FJQk8Jy36vDOSYGfk942frk9RVmbzfG052_A1Sha1v2ou12zjmfnNuG39iyzWjyIpwwkaP-WMYQiA5bhwyC0VGNojMonNxxEPEhd5avzP1c-KHGQO4Yohsg1jKviJM9m05zd-w0vLgQhqaoecmZaWkL6gQO2Tnk1byyamD-2b-JKWogny1K2IAQzltXKonBJvDd76yp64hTJGXpQeyIxRyhRxokE-sxQdSa8NgQAOTz9IvFV2J4fzvaY_fwrujfsCAgAA",
				segments: [
					{
						departureAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2024-12-17T06:30:00",
						arrivalTime: "2024-12-17T07:50:00",
						legs: [
							{
								departureTime: "2024-12-17T06:30:00",
								arrivalTime: "2024-12-17T07:50:00",
								departureAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7131,
									planeType: "735",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
					{
						departureAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2025-01-17T12:00:00",
						arrivalTime: "2025-01-17T13:20:00",
						legs: [
							{
								departureTime: "2025-01-17T12:00:00",
								arrivalTime: "2025-01-17T13:20:00",
								departureAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7124,
									planeType: "735",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
				],
				priceBreakdown: {
					total: {
						currencyCode: "NGN",
						units: 670190,
						nanos: 200000000,
					},
					baseFare: {
						currencyCode: "NGN",
						units: 309900,
						nanos: 900000000,
					},
					fee: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					tax: {
						currencyCode: "NGN",
						units: 360289,
						nanos: 300000000,
					},
					totalRounded: {
						currencyCode: "NGN",
						nanos: 290000000,
						units: 671232,
					},
					moreTaxesAndFees: {},
					discount: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					totalWithoutDiscount: {
						currencyCode: "NGN",
						units: 670190,
						nanos: 200000000,
					},
					totalWithoutDiscountRounded: {
						currencyCode: "NGN",
						nanos: 290000000,
						units: 671232,
					},
					carrierTaxBreakdown: [
						{
							carrier: {
								name: "Hahnair",
								code: "HR",
								logo: "https://r-xx.bstatic.com/data/airlines_logo/HR.png",
							},
							avgPerAdult: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							avgPerChild: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							avgPerInfant: {
								currencyCode: "NGN",
								units: 66663,
								nanos: 480000000,
							},
						},
					],
				},
				travellerPrices: [
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 296077,
								nanos: 810000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 149264,
								nanos: 900000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 296077,
								nanos: 810000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
						},
						travellerReference: "1",
						travellerType: "ADULT",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 296093,
								nanos: 130000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 149280,
								nanos: 220000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 296093,
								nanos: 130000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
						},
						travellerReference: "2",
						travellerType: "KID",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 78019,
								nanos: 260000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 11355,
								nanos: 780000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 66663,
								nanos: 480000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 180000000,
								units: 78157,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 78019,
								nanos: 260000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 180000000,
								units: 78157,
							},
						},
						travellerReference: "3",
						travellerType: "KID",
					},
				],
				priceDisplayRequirements: [],
				pointOfSale: "us",
				tripType: "ROUNDTRIP",
				posMismatch: {
					detectedPointOfSale: "us",
					isPOSMismatch: false,
					offerSalesCountry: "us",
				},
				includedProductsBySegment: [
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
				],
				includedProducts: {
					areAllSegmentsIdentical: true,
					segments: [
						[
							{
								luggageType: "PERSONAL_ITEM",
								maxPiece: 2,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 22.1,
								massUnit: "LB",
								maxPiece: 1,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 33.1,
								massUnit: "LB",
								maxPiece: 2,
								piecePerPax: 1,
							},
						],
					],
				},
				extraProducts: [
					{
						type: "flexibleTicket",
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
						},
					},
				],
				offerExtras: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 310000000,
								units: 47507,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 310000000,
								units: 47507,
							},
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				ancillaries: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
						},
						preSelected: false,
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				brandedFareInfo: {
					fareName: "Standard",
					features: [
						{
							featureName: "PERSONAL_BAGGAGE",
							category: "BAGGAGE",
							code: "BK03",
							label: "2 personal items",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "1 checked bag (22.1 lbs)",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "2 checked bags (33.1 lbs each)",
							availability: "INCLUDED",
						},
					],
					fareAttributes: [],
					nonIncludedFeaturesRequired: false,
					nonIncludedFeatures: [],
				},
				appliedDiscounts: [],
				offerKeyToHighlight: "1_P47131_2_P47124",
				seatAvailability: {
					numberOfSeatsAvailable: 4,
				},
				extraProductDisplayRequirements: {},
			},
			{
				token:
					"d6a1f_H4sIAAAAAAAA_y2Q7W-qMBjF_xr9NErLi4wlzQ0CIl5ejKDOT02tFbhzsku7iP71q7C0Oed3TvI0T1pL-SXedP18aapaCu1bgKqVbUUlB6z91M-dkmPbfjTXSqdNp3vzXZIXyAlCHzkrL9PRC3JeoK6pw94Ofzj9akAHzjh8L8NN5iWk3MRrst7EfpxFU95LTXQMT5sjBxRrruuOKBiOfqnDM2DlZRQmqTlUrJXYAvYcxQvbXLz_lh1emsU8CIZ0wql_6_OHJ9JS3JLAc9LimQ8wCQ4wf-z8dHuJsjKb51vL2YerKFnU_qa59dnOM_I7vO_9myy2ryIpw4k5PsoZwwgAy3HRkFsqMLJHZBIbryOeJC7yFMbj_s9dTcc0htBjZNoQTgW_cCab9vqX3_HacpCJNPWHnBmWlpBnYRiqWNGrYWvZxPCR3QsLNYompqduRSCAymvlSDkl3hYsM0VH4hbKGFkqPZEZo5Qp4kRDfGYpOpOnNgQBNIz-I_Fe2YOcro-a_v8BU6C7pQICAAA.",
				segments: [
					{
						departureAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2024-12-17T06:30:00",
						arrivalTime: "2024-12-17T07:50:00",
						legs: [
							{
								departureTime: "2024-12-17T06:30:00",
								arrivalTime: "2024-12-17T07:50:00",
								departureAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7131,
									planeType: "735",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
					{
						departureAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2025-01-17T10:35:00",
						arrivalTime: "2025-01-17T11:55:00",
						legs: [
							{
								departureTime: "2025-01-17T10:35:00",
								arrivalTime: "2025-01-17T11:55:00",
								departureAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7122,
									planeType: "738",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
				],
				priceBreakdown: {
					total: {
						currencyCode: "NGN",
						units: 670190,
						nanos: 200000000,
					},
					baseFare: {
						currencyCode: "NGN",
						units: 309900,
						nanos: 900000000,
					},
					fee: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					tax: {
						currencyCode: "NGN",
						units: 360289,
						nanos: 300000000,
					},
					totalRounded: {
						currencyCode: "NGN",
						nanos: 290000000,
						units: 671232,
					},
					moreTaxesAndFees: {},
					discount: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					totalWithoutDiscount: {
						currencyCode: "NGN",
						units: 670190,
						nanos: 200000000,
					},
					totalWithoutDiscountRounded: {
						currencyCode: "NGN",
						nanos: 290000000,
						units: 671232,
					},
					carrierTaxBreakdown: [
						{
							carrier: {
								name: "Hahnair",
								code: "HR",
								logo: "https://r-xx.bstatic.com/data/airlines_logo/HR.png",
							},
							avgPerAdult: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							avgPerChild: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							avgPerInfant: {
								currencyCode: "NGN",
								units: 66663,
								nanos: 480000000,
							},
						},
					],
				},
				travellerPrices: [
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 296077,
								nanos: 810000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 149264,
								nanos: 900000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 296077,
								nanos: 810000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
						},
						travellerReference: "1",
						travellerType: "ADULT",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 296093,
								nanos: 130000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 149280,
								nanos: 220000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 296093,
								nanos: 130000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
						},
						travellerReference: "2",
						travellerType: "KID",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 78019,
								nanos: 260000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 11355,
								nanos: 780000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 66663,
								nanos: 480000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 180000000,
								units: 78157,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 78019,
								nanos: 260000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 180000000,
								units: 78157,
							},
						},
						travellerReference: "3",
						travellerType: "KID",
					},
				],
				priceDisplayRequirements: [],
				pointOfSale: "us",
				tripType: "ROUNDTRIP",
				posMismatch: {
					detectedPointOfSale: "us",
					isPOSMismatch: false,
					offerSalesCountry: "us",
				},
				includedProductsBySegment: [
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
				],
				includedProducts: {
					areAllSegmentsIdentical: true,
					segments: [
						[
							{
								luggageType: "PERSONAL_ITEM",
								maxPiece: 2,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 22.1,
								massUnit: "LB",
								maxPiece: 1,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 33.1,
								massUnit: "LB",
								maxPiece: 2,
								piecePerPax: 1,
							},
						],
					],
				},
				extraProducts: [
					{
						type: "flexibleTicket",
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
						},
					},
				],
				offerExtras: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 310000000,
								units: 47507,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 310000000,
								units: 47507,
							},
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				ancillaries: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
						},
						preSelected: false,
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				brandedFareInfo: {
					fareName: "Standard",
					features: [
						{
							featureName: "PERSONAL_BAGGAGE",
							category: "BAGGAGE",
							code: "BK03",
							label: "2 personal items",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "1 checked bag (22.1 lbs)",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "2 checked bags (33.1 lbs each)",
							availability: "INCLUDED",
						},
					],
					fareAttributes: [],
					nonIncludedFeaturesRequired: false,
					nonIncludedFeatures: [],
				},
				appliedDiscounts: [],
				offerKeyToHighlight: "1_P47131_2_P47122",
				seatAvailability: {
					numberOfSeatsAvailable: 4,
				},
				extraProductDisplayRequirements: {},
			},
			{
				token:
					"d6a1f_H4sIAAAAAAAA_y2Q226jMBiEnya5KgZzCKWSVRGgFNZAGiAtV5bjOIRtNnSxq1Cefh2y8q-Zb0ayfDhJ-SWedP147tqTFNq3AG0v-5ZKDlj_Rz8OSvZ9_9ldWp12g-6vd7gooRtGAXRTP9fhA3QfDF1Tiz01z5x-dWAARxR9VNE29zGptsmGbLZJkOTxko9SEwNDy27PAUWa53l3FAzF_2lAK2AXVRzhzJor1ktkA2cNkxfHeonxvRzQq1Wuw3BOB5QF17GYfJFV4opD383KW24MHNZmMe2CrD7HeZWvi9oWeZ2MZd3AzIicapLN22cj3qM0xmEE67BxcZU2OIBp9XOV2dvCCtXMx3DGEATAdj04554KBJ07MonMxzseJCqLzEjuL7rd3nItcw4jgpZjGEvBz5zJrr_84j9oY7vQgpr6Vc5MW8NkLgxVpPRiOlq-MAPojHvv0VG0sHw1LTGAofykHCqnxK_BrlC0J16pjJFXpQeyYpQyRZxokK9sRUdy045AAOetv0nyrmwih8t0on__AQYK6IkUAgAA",
				segments: [
					{
						departureAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2024-12-17T06:30:00",
						arrivalTime: "2024-12-17T07:50:00",
						legs: [
							{
								departureTime: "2024-12-17T06:30:00",
								arrivalTime: "2024-12-17T07:50:00",
								departureAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7131,
									planeType: "735",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
					{
						departureAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2025-01-17T19:00:00",
						arrivalTime: "2025-01-17T20:20:00",
						legs: [
							{
								departureTime: "2025-01-17T19:00:00",
								arrivalTime: "2025-01-17T20:20:00",
								departureAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7130,
									planeType: "733",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
				],
				priceBreakdown: {
					total: {
						currencyCode: "NGN",
						units: 670190,
						nanos: 200000000,
					},
					baseFare: {
						currencyCode: "NGN",
						units: 309900,
						nanos: 900000000,
					},
					fee: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					tax: {
						currencyCode: "NGN",
						units: 360289,
						nanos: 300000000,
					},
					totalRounded: {
						currencyCode: "NGN",
						nanos: 290000000,
						units: 671232,
					},
					moreTaxesAndFees: {},
					discount: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					totalWithoutDiscount: {
						currencyCode: "NGN",
						units: 670190,
						nanos: 200000000,
					},
					totalWithoutDiscountRounded: {
						currencyCode: "NGN",
						nanos: 290000000,
						units: 671232,
					},
					carrierTaxBreakdown: [
						{
							carrier: {
								name: "Hahnair",
								code: "HR",
								logo: "https://r-xx.bstatic.com/data/airlines_logo/HR.png",
							},
							avgPerAdult: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							avgPerChild: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							avgPerInfant: {
								currencyCode: "NGN",
								units: 66663,
								nanos: 480000000,
							},
						},
					],
				},
				travellerPrices: [
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 296077,
								nanos: 810000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 149264,
								nanos: 900000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 296077,
								nanos: 810000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
						},
						travellerReference: "1",
						travellerType: "ADULT",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 296093,
								nanos: 130000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 149280,
								nanos: 220000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 296093,
								nanos: 130000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
						},
						travellerReference: "2",
						travellerType: "KID",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 78019,
								nanos: 260000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 11355,
								nanos: 780000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 66663,
								nanos: 480000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 180000000,
								units: 78157,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 78019,
								nanos: 260000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 180000000,
								units: 78157,
							},
						},
						travellerReference: "3",
						travellerType: "KID",
					},
				],
				priceDisplayRequirements: [],
				pointOfSale: "us",
				tripType: "ROUNDTRIP",
				posMismatch: {
					detectedPointOfSale: "us",
					isPOSMismatch: false,
					offerSalesCountry: "us",
				},
				includedProductsBySegment: [
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
				],
				includedProducts: {
					areAllSegmentsIdentical: true,
					segments: [
						[
							{
								luggageType: "PERSONAL_ITEM",
								maxPiece: 2,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 22.1,
								massUnit: "LB",
								maxPiece: 1,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 33.1,
								massUnit: "LB",
								maxPiece: 2,
								piecePerPax: 1,
							},
						],
					],
				},
				extraProducts: [
					{
						type: "flexibleTicket",
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
						},
					},
				],
				offerExtras: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 310000000,
								units: 47507,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 310000000,
								units: 47507,
							},
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				ancillaries: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
						},
						preSelected: false,
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				brandedFareInfo: {
					fareName: "Standard",
					features: [
						{
							featureName: "PERSONAL_BAGGAGE",
							category: "BAGGAGE",
							code: "BK03",
							label: "2 personal items",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "1 checked bag (22.1 lbs)",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "2 checked bags (33.1 lbs each)",
							availability: "INCLUDED",
						},
					],
					fareAttributes: [],
					nonIncludedFeaturesRequired: false,
					nonIncludedFeatures: [],
				},
				appliedDiscounts: [],
				offerKeyToHighlight: "1_P47131_2_P47130",
				seatAvailability: {
					numberOfSeatsAvailable: 4,
				},
				extraProductDisplayRequirements: {},
			},
			{
				token:
					"d6a1f_H4sIAAAAAAAA_y2Q3W6jMBCFnya5KgbzE0ola0WAUqiBNEC7XFmO4xC22dBiV0l5-jpQeXTON0caeeyjlB_iQdcPp649SqF9CdD2sm-p5ID1__XDoGTX9-_dudVpN-j--hUXJXTDKIBu6uc6vIPunaFr6rCH5g-nHx0YwAFFf6tom_uYVNtkQzbbJEjyeMmvUhMDQ8tuxwFFmud5MwqG4l8a0ArYRRVHOLOmiPUS2cBZw-TRsR63cA4H9GSV6zCcuj3Kgsu1GH2RVeKCQ9_NylvfGDiszWJ8DbL6FOdVvi5qW-R1ci3rBmZG5FSjbF7eG_EWpTEOI1iHjYurtMEBTKvvi8xeFlaoarqGM4YgALbrzUv0VCDozMgkMu9n3EtUFpmRzC-6bW-5ljk1VwQtxzCWgp84k11_fubfaGO70IKa-lXOTFvD5BaY9ypI6dl0tHxhBnBlyJ4xRQvLV9USAxjKj8qhckr8GlRY0Y54pTJGnpTuyYpRyhRxokG-shUdyE07AgGcRv-R5E3ZSPbn8Ug_fwCXQ9fFFAIAAA..",
				segments: [
					{
						departureAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2024-12-17T06:30:00",
						arrivalTime: "2024-12-17T07:50:00",
						legs: [
							{
								departureTime: "2024-12-17T06:30:00",
								arrivalTime: "2024-12-17T07:50:00",
								departureAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7131,
									planeType: "735",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
					{
						departureAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2025-01-17T17:45:00",
						arrivalTime: "2025-01-17T19:05:00",
						legs: [
							{
								departureTime: "2025-01-17T17:45:00",
								arrivalTime: "2025-01-17T19:05:00",
								departureAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7128,
									planeType: "320",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "A320",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
				],
				priceBreakdown: {
					total: {
						currencyCode: "NGN",
						units: 670190,
						nanos: 200000000,
					},
					baseFare: {
						currencyCode: "NGN",
						units: 309900,
						nanos: 900000000,
					},
					fee: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					tax: {
						currencyCode: "NGN",
						units: 360289,
						nanos: 300000000,
					},
					totalRounded: {
						currencyCode: "NGN",
						nanos: 290000000,
						units: 671232,
					},
					moreTaxesAndFees: {},
					discount: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					totalWithoutDiscount: {
						currencyCode: "NGN",
						units: 670190,
						nanos: 200000000,
					},
					totalWithoutDiscountRounded: {
						currencyCode: "NGN",
						nanos: 290000000,
						units: 671232,
					},
					carrierTaxBreakdown: [
						{
							carrier: {
								name: "Hahnair",
								code: "HR",
								logo: "https://r-xx.bstatic.com/data/airlines_logo/HR.png",
							},
							avgPerAdult: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							avgPerChild: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							avgPerInfant: {
								currencyCode: "NGN",
								units: 66663,
								nanos: 480000000,
							},
						},
					],
				},
				travellerPrices: [
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 296077,
								nanos: 810000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 149264,
								nanos: 900000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 296077,
								nanos: 810000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
						},
						travellerReference: "1",
						travellerType: "ADULT",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 296093,
								nanos: 130000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 149280,
								nanos: 220000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 296093,
								nanos: 130000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
						},
						travellerReference: "2",
						travellerType: "KID",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 78019,
								nanos: 260000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 11355,
								nanos: 780000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 66663,
								nanos: 480000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 180000000,
								units: 78157,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 78019,
								nanos: 260000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 180000000,
								units: 78157,
							},
						},
						travellerReference: "3",
						travellerType: "KID",
					},
				],
				priceDisplayRequirements: [],
				pointOfSale: "us",
				tripType: "ROUNDTRIP",
				posMismatch: {
					detectedPointOfSale: "us",
					isPOSMismatch: false,
					offerSalesCountry: "us",
				},
				includedProductsBySegment: [
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
				],
				includedProducts: {
					areAllSegmentsIdentical: true,
					segments: [
						[
							{
								luggageType: "PERSONAL_ITEM",
								maxPiece: 2,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 22.1,
								massUnit: "LB",
								maxPiece: 1,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 33.1,
								massUnit: "LB",
								maxPiece: 2,
								piecePerPax: 1,
							},
						],
					],
				},
				extraProducts: [
					{
						type: "flexibleTicket",
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
						},
					},
				],
				offerExtras: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 310000000,
								units: 47507,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 310000000,
								units: 47507,
							},
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				ancillaries: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
						},
						preSelected: false,
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				brandedFareInfo: {
					fareName: "Standard",
					features: [
						{
							featureName: "PERSONAL_BAGGAGE",
							category: "BAGGAGE",
							code: "BK03",
							label: "2 personal items",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "1 checked bag (22.1 lbs)",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "2 checked bags (33.1 lbs each)",
							availability: "INCLUDED",
						},
					],
					fareAttributes: [],
					nonIncludedFeaturesRequired: false,
					nonIncludedFeatures: [],
				},
				appliedDiscounts: [],
				offerKeyToHighlight: "1_P47131_2_P47128",
				seatAvailability: {
					numberOfSeatsAvailable: 4,
				},
				extraProductDisplayRequirements: {},
			},
			{
				token:
					"d6a1f_H4sIAAAAAAAA_y2Qa2-bMBiFf03yqRjMdVSyJm6lMC5pgHZ8shzHIawZZNhTUn79HJj86pznHMny5SzElT-r6unSd2fBlb8cdKMYOyIYoONv9TRJOYzjZz90Kukn1fPfs7KCThgF0Em9QoVP0HnSVEUu-tx-Z-TagwmcUPSzjvaFl-F6n-zwbp8ESRFv2V0ofKJo2x8YIEhxXXdFTlH8nyZkA7Os4yjLjaWio0AmsHyYvFjGS-Cv5YRejcoPwyUdUR7c7uXs8bzmtyz0nLx65FbLwkYv5_cgby5xURd-2Zi8aJJ71bQw1yKrnkX79tnyjyiNszCCTdg6WZ22WQDT-usm8reNEcpZjmGUIgiA6bhwySPhCForUoH0byseBarKXEvWFz1ubziGvoQ7goalaVvOLoyKfhx-sC-0Mx1oQEX-KqO6qWRYFqZpyiIlg24pxUYPoA0H271K2hienA5rQJN-lg6lE-w1IEgkHbBbSaP4VeoR25QQKolhBTLblHTCD-0xBHDZ-gsnH9JmfBzmM_nzDxLh2-kUAgAA",
				segments: [
					{
						departureAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2024-12-17T06:30:00",
						arrivalTime: "2024-12-17T07:50:00",
						legs: [
							{
								departureTime: "2024-12-17T06:30:00",
								arrivalTime: "2024-12-17T07:50:00",
								departureAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7131,
									planeType: "735",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
					{
						departureAirport: {
							type: "AIRPORT",
							code: "LOS",
							name: "Murtala Muhammed International Airport",
							city: "LOS",
							cityName: "Lagos",
							country: "NG",
							countryName: "Nigeria",
						},
						arrivalAirport: {
							type: "AIRPORT",
							code: "ABV",
							name: "Nnamdi Azikiwe International Airport",
							city: "ABV",
							cityName: "Abuja",
							country: "NG",
							countryName: "Nigeria",
						},
						departureTime: "2025-01-17T07:30:00",
						arrivalTime: "2025-01-17T08:50:00",
						legs: [
							{
								departureTime: "2025-01-17T07:30:00",
								arrivalTime: "2025-01-17T08:50:00",
								departureAirport: {
									type: "AIRPORT",
									code: "LOS",
									name: "Murtala Muhammed International Airport",
									city: "LOS",
									cityName: "Lagos",
									country: "NG",
									countryName: "Nigeria",
								},
								arrivalAirport: {
									type: "AIRPORT",
									code: "ABV",
									name: "Nnamdi Azikiwe International Airport",
									city: "ABV",
									cityName: "Abuja",
									country: "NG",
									countryName: "Nigeria",
								},
								cabinClass: "ECONOMY",
								flightInfo: {
									facilities: [],
									flightNumber: 7444,
									planeType: "737",
									carrierInfo: {
										operatingCarrier: "P4",
										marketingCarrier: "P4",
										operatingCarrierDisclosureText: "",
									},
								},
								carriers: ["P4", "P4"],
								carriersData: [
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
									{
										name: "Air Peace Limited",
										code: "P4",
										logo: "https://r-xx.bstatic.com/data/airlines_logo/P4.png",
									},
								],
								totalTime: 4800,
								flightStops: [],
								amenities: [
									{
										category: "AIRCRAFT",
										model: "737",
									},
									{
										category: "FOOD",
										cost: "free",
										type: "snack",
									},
								],
							},
						],
						totalTime: 4800,
						travellerCheckedLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 33.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
							{
								travellerReference: "3",
								luggageAllowance: {
									luggageType: "CHECKED_IN",
									ruleType: "WEIGHT_BASED",
									maxTotalWeight: 22.1,
									massUnit: "LB",
									maxPiece: 1,
								},
							},
						],
						travellerCabinLuggage: [
							{
								travellerReference: "1",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
							{
								travellerReference: "2",
								luggageAllowance: {
									luggageType: "HAND",
									maxPiece: 0,
								},
								personalItem: true,
							},
						],
						isAtolProtected: false,
						showWarningDestinationAirport: false,
						showWarningOriginAirport: false,
					},
				],
				priceBreakdown: {
					total: {
						currencyCode: "NGN",
						units: 670190,
						nanos: 200000000,
					},
					baseFare: {
						currencyCode: "NGN",
						units: 309900,
						nanos: 900000000,
					},
					fee: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					tax: {
						currencyCode: "NGN",
						units: 360289,
						nanos: 300000000,
					},
					totalRounded: {
						currencyCode: "NGN",
						nanos: 290000000,
						units: 671232,
					},
					moreTaxesAndFees: {},
					discount: {
						currencyCode: "NGN",
						units: 0,
						nanos: 0,
					},
					totalWithoutDiscount: {
						currencyCode: "NGN",
						units: 670190,
						nanos: 200000000,
					},
					totalWithoutDiscountRounded: {
						currencyCode: "NGN",
						nanos: 290000000,
						units: 671232,
					},
					carrierTaxBreakdown: [
						{
							carrier: {
								name: "Hahnair",
								code: "HR",
								logo: "https://r-xx.bstatic.com/data/airlines_logo/HR.png",
							},
							avgPerAdult: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							avgPerChild: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							avgPerInfant: {
								currencyCode: "NGN",
								units: 66663,
								nanos: 480000000,
							},
						},
					],
				},
				travellerPrices: [
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 296077,
								nanos: 810000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 149264,
								nanos: 900000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 296077,
								nanos: 810000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
						},
						travellerReference: "1",
						travellerType: "ADULT",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 296093,
								nanos: 130000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 149280,
								nanos: 220000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 146812,
								nanos: 910000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 296093,
								nanos: 130000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 800000000,
								units: 297303,
							},
						},
						travellerReference: "2",
						travellerType: "KID",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 78019,
								nanos: 260000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 11355,
								nanos: 780000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 66663,
								nanos: 480000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 180000000,
								units: 78157,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 78019,
								nanos: 260000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 180000000,
								units: 78157,
							},
						},
						travellerReference: "3",
						travellerType: "KID",
					},
				],
				priceDisplayRequirements: [],
				pointOfSale: "us",
				tripType: "ROUNDTRIP",
				posMismatch: {
					detectedPointOfSale: "us",
					isPOSMismatch: false,
					offerSalesCountry: "us",
				},
				includedProductsBySegment: [
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
					[
						{
							travellerReference: "1",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "2",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 33.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
								{
									type: "personalItem",
								},
							],
						},
						{
							travellerReference: "3",
							travellerProducts: [
								{
									type: "checkedInBaggage",
									product: {
										luggageType: "CHECKED_IN",
										ruleType: "WEIGHT_BASED",
										maxTotalWeight: 22.1,
										massUnit: "LB",
										maxPiece: 1,
									},
								},
							],
						},
					],
				],
				includedProducts: {
					areAllSegmentsIdentical: true,
					segments: [
						[
							{
								luggageType: "PERSONAL_ITEM",
								maxPiece: 2,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 22.1,
								massUnit: "LB",
								maxPiece: 1,
								piecePerPax: 1,
							},
							{
								luggageType: "CHECKED_IN",
								ruleType: "WEIGHT_BASED",
								maxTotalWeight: 33.1,
								massUnit: "LB",
								maxPiece: 2,
								piecePerPax: 1,
							},
						],
					],
				},
				extraProducts: [
					{
						type: "flexibleTicket",
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
						},
					},
				],
				offerExtras: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 310000000,
								units: 47507,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 310000000,
								units: 47507,
							},
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				ancillaries: {
					flexibleTicket: {
						airProductReference: "n/a",
						travellers: ["1", "2"],
						priceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 46909,
								nanos: 640000000,
							},
						},
						preSelected: false,
						recommendation: {
							recommended: false,
							confidence: "UNKNOWN_LEVEL",
						},
						supplierInfo: {
							name: "Gotogate, Inc.",
							termsUrl: "https://flights-us.gotogate.com/rf/travel-conditions",
							privacyPolicyUrl:
								"https://flights-us.gotogate.com/rf/privacy-policy",
						},
					},
				},
				brandedFareInfo: {
					fareName: "Standard",
					features: [
						{
							featureName: "PERSONAL_BAGGAGE",
							category: "BAGGAGE",
							code: "BK03",
							label: "2 personal items",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "1 checked bag (22.1 lbs)",
							availability: "INCLUDED",
						},
						{
							featureName: "CHECK_BAGGAGE",
							category: "BAGGAGE",
							code: "BK01",
							label: "2 checked bags (33.1 lbs each)",
							availability: "INCLUDED",
						},
					],
					fareAttributes: [],
					nonIncludedFeaturesRequired: false,
					nonIncludedFeatures: [],
				},
				appliedDiscounts: [],
				offerKeyToHighlight: "1_P47131_2_P47444",
				seatAvailability: {
					numberOfSeatsAvailable: 4,
				},
				extraProductDisplayRequirements: {},
			},
		],
		flightDeals: [
			{
				key: "CHEAPEST",
				offerToken:
					"d6a1f_H4sIAAAAAAAA_y2QbY-iMBSFf41-GgrlxQ6TNBsEVFxeVGAcPjVYKzLjWJd2osuv3wqb3pzz3NPbNO1Zypt40_XTpW3OUmg_AjRc8qaWDFD-rZ86JQfOv9pro9dtp3vz9zjLIQpCH6K1l-rwBaIXQ9fUom_VL1bfWtCBEw4_inCXejEpdtGGbHaRH6XLKXtITXQUT9sDAzXWXNcdUVC8_E8dngE7K5ZhnFhDRLnENnDmMFo41mI7H8MOr6xgYY4jR5z490fWeyIpxD0OPJTkz74046Aysv7dT8rLMi3SeVa-irSMHnlZwcQIneJTVtuvSuzD9TIOQlgGFYqLdRX7cFX4d5lsJ1agariGUYohADZy4dDzWmDojEglNl9HPEqcZ4kRjS_izw3bQUPzwNByDGMq2IVR2fLrb_YXb2wETVdTv8qoaWspGYKZCtb11XS0dGL6cOa29_6qaGJ5qhpiAEP5WTlUXpN9BFKk6EDcXBklK6VHYiMLPgcZ0eABzRSdiK20JRDA4egnifbKeoLonxvv_wGDxy3oFAIAAA..",
				price: {
					currencyCode: "NGN",
					units: 436101,
					nanos: 770000000,
				},
				travellerPrices: [
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106738,
								nanos: 190000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "1",
						travellerType: "ADULT",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106753,
								nanos: 520000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "2",
						travellerType: "KID",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 8673,
								nanos: 920000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 66203,
								nanos: 730000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
						},
						travellerReference: "3",
						travellerType: "KID",
					},
				],
			},
			{
				key: "FASTEST",
				offerToken:
					"d6a1f_H4sIAAAAAAAA_y2QW2-jMBCFf03yVAwGHJdK1ooAJVAuaYB2ebKI4xBaGirsKpdfvy6sPJrznSONPPZJym_xpOvHvmtPUmg_ArSDHNpGcsCGL_04qrYfhs_u3OpNN-ru-i3JC4j9wIM4djMdPkD8YOiaOuyp_sOb7w6M4EiCv2Wwy9yElrtoS7e7yIuycMmvUhMjI8tuz0FDNMdxZhSMhP9pJCtg52UYJKk1RWyQxAZoDaNnZD1vvDkcycbaxime3IGk3uWa312RluKS-C5Oi19fG4lfmfn9zUurPszKbJ1Xtsiq6FpUNUyNAJV3Wb9-1uI9iMPED2Dl1zgp4zrxYFJ1F5m-Lixf1XQNZ4xAAGzswMkPjSAQzcgkMR9nPEhS5KkRzS9S2yMbonnRK4EWMoyl4D1nshvOL_xGtjaGJtbUr3Jm2ppHp2Clgrg5m0jLFqYH0a3vbz-KFparqqUmMJSeqAGg0oZWLyDDivbUKZQwulH9QB9X9sFWxKlmQmQqOtJf31EI4DT6QaN3JXeKb_A8in_rHVGuFAIAAA..",
				price: {
					currencyCode: "NGN",
					units: 829952,
					nanos: 680000000,
				},
				travellerPrices: [
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 368181,
								nanos: 640000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 285273,
								nanos: 720000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 82907,
								nanos: 920000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 10000000,
								units: 369331,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 368181,
								nanos: 640000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 10000000,
								units: 369331,
							},
						},
						travellerReference: "1",
						travellerType: "ADULT",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 368196,
								nanos: 970000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 285289,
								nanos: 50000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 82907,
								nanos: 920000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 10000000,
								units: 369331,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 368196,
								nanos: 970000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 10000000,
								units: 369331,
							},
						},
						travellerReference: "2",
						travellerType: "KID",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 94401,
								nanos: 620000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 24765,
								nanos: 100000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 68808,
								nanos: 970000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 620000000,
								units: 95014,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 94401,
								nanos: 620000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 620000000,
								units: 95014,
							},
						},
						travellerReference: "3",
						travellerType: "KID",
					},
				],
			},
			{
				key: "BEST",
				offerToken:
					"d6a1f_H4sIAAAAAAAA_y2QbY-iMBSFf41-GgrlxQ6TNBsEVFxeVGAcPjVYKzLjWJd2osuv3wqb3pzz3NPbNO1Zypt40_XTpW3OUmg_AjRc8qaWDFD-rZ86JQfOv9pro9dtp3vz9zjLIQpCH6K1l-rwBaIXQ9fUom_VL1bfWtCBEw4_inCXejEpdtGGbHaRH6XLKXtITXQUT9sDAzXWXNcdUVC8_E8dngE7K5ZhnFhDRLnENnDmMFo41mI7H8MOr6xgYY4jR5z490fWeyIpxD0OPJTkz74046Aysv7dT8rLMi3SeVa-irSMHnlZwcQIneJTVtuvSuzD9TIOQlgGFYqLdRX7cFX4d5lsJ1agariGUYohADZy4dDzWmDojEglNl9HPEqcZ4kRjS_izw3bQUPzwNByDGMq2IVR2fLrb_YXb2wETVdTv8qoaWspGYKZCtb11XS0dGL6cOa29_6qaGJ5qhpiAEP5WTlUXpN9BFKk6EDcXBklK6VHYiMLPgcZ0eABzRSdiK20JRDA4egnifbKeoLonxvv_wGDxy3oFAIAAA..",
				price: {
					currencyCode: "NGN",
					units: 436101,
					nanos: 770000000,
				},
				travellerPrices: [
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106738,
								nanos: 190000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180604,
								nanos: 400000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "1",
						travellerType: "ADULT",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 106753,
								nanos: 520000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 73866,
								nanos: 200000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 180619,
								nanos: 720000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 270000000,
								units: 180834,
							},
						},
						travellerReference: "2",
						travellerType: "KID",
					},
					{
						travellerPriceBreakdown: {
							total: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							baseFare: {
								currencyCode: "NGN",
								units: 8673,
								nanos: 920000000,
							},
							fee: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							tax: {
								currencyCode: "NGN",
								units: 66203,
								nanos: 730000000,
							},
							totalRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
							moreTaxesAndFees: {},
							discount: {
								currencyCode: "NGN",
								units: 0,
								nanos: 0,
							},
							totalWithoutDiscount: {
								currencyCode: "NGN",
								units: 74877,
								nanos: 650000000,
							},
							totalWithoutDiscountRounded: {
								currencyCode: "NGN",
								nanos: 200000000,
								units: 75092,
							},
						},
						travellerReference: "3",
						travellerType: "KID",
					},
				],
			},
		],
		atolProtectedStatus: "NONE",
		searchId: "BABF1B80CF69F0B3D41E6C4BFD1B42C2",
		banners: [],
		displayOptions: {
			brandedFaresShownByDefault: false,
			directFlightsOnlyFilterIgnored: false,
			hideFlexiblePricesBanner: false,
		},
		isOffersCabinClassExtended: false,
		cabinClassExtension: {},
		searchCriteria: {
			cabinClass: "ECONOMY",
		},
		baggagePolicies: [
			{
				code: "X1",
				name: "Hahnair Technologies",
				url: "https://www.hahnair.com/en/faq/section/1",
			},
			{
				code: "Q4",
				name: "Euroairlines",
				url: "https://www.euroairlines.es/en/viajeros/",
			},
			{
				code: "AW",
				name: "Africa World Airlines",
				url: "https://www.flyafricaworld.com/travel-info/baggage-requirement/",
			},
			{
				code: "KP",
				name: "Asky",
				url: "https://www.flyasky.com/BF/en/information/practical-information/luggage",
			},
		],
		priceAlertStatus: {
			isEligible: false,
			isSearchEligible: false,
		},
	},
};

export default sampleFlightList;
