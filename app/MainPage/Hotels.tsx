"use client";

import React, { useState } from "react";
// import { useEffect } from "react";
import Image from "next/image";
import HotelImg from "../images/hotel.png";

// import axios from "axios";
// import client from "@/service/api";
// import { IHotel, IHotelResponse } from "@/types/hotels.type";
import sampleHotelList from "@/utils/hotelsList";
import { Hotel, IHotelData } from "@/types/hotels2.type";
import HotelCard from "../components/HotelCard";
import HotelModal from "../components/Modal";

const Hotels = () => {
	const [data, setData] = useState<IHotelData | null>(sampleHotelList.data);
	const [displayHotels, setDisplayHotels] = useState<Hotel[]>([]);
	const showModal = (): void => {
		const modalElement = document.getElementById(
			"my_modal_3"
		) as HTMLDialogElement | null;
		modalElement?.showModal(); // Optional chaining in case the modal is not found
	};

	// Function to add a hotel to displayHotels
	const handleAddHotel = (hotel: Hotel) => {
		console.log(hotel);
		if (!displayHotels.includes(hotel)) {
			setDisplayHotels((prevHotels) => [...prevHotels, hotel]);
		}
	};

	// Function to remove a hotel from displayHotels
	const handleRemoveHotel = (hotel: Hotel) => {
		setDisplayHotels((prevHotels) =>
			prevHotels.filter((item) => item !== hotel)
		);
	};

	console.log(data, setData);
	return (
		<div className=" bg-[#344054] px-5 py-8 my-5 rounded-md">
			<div className=" font-semibold flex text-heading-black gap-1 mb-6">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M22.5 16.8748H22.125V5.7307L22.7353 5.60039C22.8818 5.57171 23.0212 5.51415 23.1453 5.43106C23.2693 5.34798 23.3756 5.24102 23.4579 5.11644C23.5402 4.99186 23.5969 4.85215 23.6246 4.70544C23.6524 4.55873 23.6506 4.40796 23.6195 4.26193C23.5884 4.1159 23.5286 3.97752 23.4434 3.85486C23.3583 3.7322 23.2496 3.62772 23.1236 3.5475C22.9977 3.46728 22.8571 3.41293 22.7099 3.38762C22.5628 3.36231 22.4121 3.36654 22.2666 3.40008L1.26656 7.90008C0.995421 7.95858 0.755451 8.11519 0.592735 8.33983C0.430019 8.56447 0.35603 8.84131 0.384977 9.11717C0.413924 9.39304 0.543766 9.64849 0.749567 9.83446C0.955369 10.0204 1.22262 10.1238 1.5 10.1248C1.5797 10.1249 1.65919 10.1167 1.73719 10.1004L1.87594 10.0704V16.8748H1.5C1.20163 16.8748 0.915483 16.9933 0.704505 17.2043C0.493526 17.4152 0.375 17.7014 0.375 17.9998C0.375 18.2981 0.493526 18.5843 0.704505 18.7953C0.915483 19.0062 1.20163 19.1248 1.5 19.1248H22.5C22.7984 19.1248 23.0845 19.0062 23.2955 18.7953C23.5065 18.5843 23.625 18.2981 23.625 17.9998C23.625 17.7014 23.5065 17.4152 23.2955 17.2043C23.0845 16.9933 22.7984 16.8748 22.5 16.8748ZM4.125 9.58758L19.875 6.21258V16.8748H18V11.2498C18 10.9514 17.8815 10.6652 17.6705 10.4543C17.4595 10.2433 17.1734 10.1248 16.875 10.1248H7.125C6.82663 10.1248 6.54048 10.2433 6.3295 10.4543C6.11853 10.6652 6 10.9514 6 11.2498V16.8748H4.125V9.58758ZM15.75 13.4998H8.25V12.3748H15.75V13.4998ZM8.25 15.7498H15.75V16.8748H8.25V15.7498Z"
						fill="white"
					/>
				</svg>

				<p className=" text-white">Hotels</p>
			</div>
			<div className="bg-white">
				<div className="flex justify-center items-center flex-col py-12">
					{displayHotels.length > 0 ? (
						displayHotels.map((hotel, i) => (
							<HotelCard
								key={i}
								hotel={hotel}
								handleRemoveHotel={handleRemoveHotel}
								handleAddHotel={handleAddHotel}
							/>
						))
					) : (
						<div>
							<Image src={HotelImg} alt="" />
							<p className=" text-heading-black font-semibold">
								No Request Yet
							</p>
							<button
								className="btn px-10 bg-primary-blue text-white font-normal"
								onClick={showModal}
							>
								Add Hotel
							</button>
						</div>
					)}

					<HotelModal
						showModal={showModal}
						data={data}
						setData={setData}
						handleAddHotel={handleAddHotel}
						handleRemoveHotel={handleRemoveHotel}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hotels;
