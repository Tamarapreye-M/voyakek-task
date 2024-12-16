import React from "react";
import Image from "next/image";
import DashBoard from "./Navbar/DashBoard";
import Main from "./MainPage/Main";

const HomePage = () => {
	return (
		<div className="  bg-primary-gray  flex p-7 text-primary-text">
			<DashBoard />
			<Main />
		</div>
	);
};

export default HomePage;
