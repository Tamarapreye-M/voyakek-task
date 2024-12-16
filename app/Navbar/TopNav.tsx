import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import profilePic from "../images/profile-woman.png";
import {
	BiSearch,
	BiWallet,
	BiDonateBlood,
	BiPieChartAlt2,
} from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { VscChecklist, VscDiffAdded } from "react-icons/vsc";
import { IoNotificationsOutline, IoBasketOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Topnav = () => {
	return (
		<div className=" flex items-center justify-between px-4 py-4 bg-white text-primary-text h-[15vh]">
			<div className=" flex items-center justify-center gap-4">
				<div>
					<Image src={logo} alt="/" />
				</div>
				<label className="input input-bordered md:flex items-center gap-2 bg-[#F0F2F5] hidden">
					<BiSearch className=" text-xl text-primary-text" />
					<input type="text" className="grow" placeholder="Search" />
				</label>
				<BiSearch className=" text-xl text-primary-text md:hidden" />
				{/* <button className="btn btn-wide flex items-center justify-start text-lg font-light bg-[#F0F2F5] ">
					{" "}
					Search
				</button> */}
			</div>
			<div className=" flex items-center py-3 gap-6">
				<div className=" lg:flex justify-center items-center gap-5 h-full border-r-2 pr-5 hidden">
					{navLinks1.map((item) => {
						return (
							<div
								key={item.id}
								className=" flex flex-col items-center justify-between text-2xl gap-2"
							>
								{item.icon}
								<p className=" text-xs">{item.description}</p>
							</div>
						);
					})}
				</div>
				<div>
					<button className="btn bg-primary-blue text-white btn-xs sm:btn-sm md:btn-md ">
						Subsribe
					</button>
				</div>
				<div className="lg:flex justify-center items-center gap-5 h-full hidden ">
					{navLinks2.map((item) => {
						return (
							<div
								key={item.id}
								className=" flex flex-col items-center justify-between text-2xl gap-2"
							>
								{item.icon}
								<p className=" text-xs">{item.description}</p>
							</div>
						);
					})}
				</div>
				<div className="flex items-center gap-4">
					<Image src={profilePic} alt="/" />
					<IoIosArrowDown />
				</div>
			</div>
		</div>
	);
};

const navLinks1 = [
	{
		id: 1,
		icon: <GoHome />,
		description: "Home",
	},
	{
		id: 2,
		icon: <BiPieChartAlt2 />,
		description: "Dashboard",
	},
	{
		id: 3,
		icon: <BiWallet />,
		description: "Wallet",
	},
	{
		id: 4,
		icon: <VscChecklist />,
		description: "Plan trip",
	},
	{
		id: 5,
		icon: <BiDonateBlood />,
		description: "Commission for life",
	},
];

const navLinks2 = [
	{
		id: 1,
		icon: <IoNotificationsOutline />,
		description: "Notification",
	},
	{
		id: 2,
		icon: <IoBasketOutline />,
		description: "Carts",
	},
	{
		id: 3,
		icon: <VscDiffAdded />,
		description: "Create",
	},
];
export default Topnav;
