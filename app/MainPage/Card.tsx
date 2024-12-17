import React from "react";

type Props = {
	bg: string;
	title: string;
	text: string;
	btnBg: string;
	btnColor: string;
	textColor: string;
};
const Card = ({ bg, title, text, btnColor, btnBg, textColor }: Props) => {
	return (
		<div className={`card bg-[${bg}] text-[${textColor}] rounded-md`}>
			<div className="card-body p-4">
				<h2 className=" font-semibold">{title}</h2>
				<p className=" text-sm">{text}</p>
				<div className="card-actions justify-end mt-6">
					<button
						className={`btn w-full text-[${btnColor}] bg-[${btnBg}] border-0 rounded-md text-xs`}
					>
						Add {title}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
