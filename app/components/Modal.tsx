import { Hotel, IHotelData } from "@/types/hotels2.type";
import React from "react";
import HotelCard from "./HotelCard";

type ModalProps = {
	showModal: () => void;
	data: IHotelData | null;
	setData: React.Dispatch<React.SetStateAction<IHotelData | null>>;
	handleRemoveHotel: (hotel: Hotel) => void;
	handleAddHotel: (hotel: Hotel) => void;
};
const HotelModal = ({
	showModal,
	data,
	setData,
	handleAddHotel,
	handleRemoveHotel,
}: ModalProps) => {
	return (
		<div>
			{/* You can open the modal using document.getElementById('ID').showModal() method */}
			{/* <button className="btn" onClick={showModal}>
				open modal
			</button> */}
			<dialog id="my_modal_3" className="modal">
				<div className="modal-box w-11/12 max-w-5xl">
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
							✕
						</button>
					</form>
					<h3 className="font-bold text-lg">Hotel List</h3>

					<div>
						{data?.hotels.map((hotel, i) => {
							return (
								<HotelCard
									key={i}
									hotel={hotel}
									// hotelName={hotel.property.name}
									// imageUrl={hotel.property.photoUrls[0]}
									handleAddHotel={handleAddHotel}
									handleRemoveHotel={handleRemoveHotel}
								/>
							);
						})}
					</div>
				</div>
			</dialog>
		</div>
	);
};

export default HotelModal;
