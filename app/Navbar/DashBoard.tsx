import React from "react";
import { RxCaretSort } from "react-icons/rx";
// import { SlPlane } from "react-icons/sl";
// import { MdOutlineLuggage, MdOutlineMedicalServices } from "react-icons/md";

const DashBoard = () => {
	return (
		<div className=" rounded-sm bg-white w-[20%] p-5 lg:block hidden">
			<div className="flex flex-col gap-7 my-5">
				{dashLinks.map((item) => {
					return (
						<div key={item.id} className="flex items-center gap-2">
							{item.icon}
							<p className=" text-sm">{item.description}</p>
						</div>
					);
				})}
			</div>
			<div className=" bg-primary-gray flex items-center justify-between p-3 my-20">
				<div className="flex items-center">
					<div>
						<p className="bg-primary-blue text-white  text-base p-4 rounded-md">
							GO
						</p>
					</div>
					<div className="mx-2">
						<p className=" text-nowrap">Personal Account</p>
					</div>
				</div>
				<div>
					<RxCaretSort className=" text-4xl" />
				</div>
			</div>
		</div>
	);
};

const dashLinks = [
	{
		id: 1,
		icon: (
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M29.4899 24.875C29.3751 24.9397 29.2486 24.9811 29.1178 24.9968C28.9869 25.0125 28.8542 25.0021 28.7274 24.9663C28.6005 24.9306 28.482 24.8701 28.3786 24.7883C28.2752 24.7066 28.189 24.6052 28.1249 24.49L19.4149 9H16.9999V10C16.9999 10.2652 16.8946 10.5196 16.707 10.7071C16.5195 10.8946 16.2651 11 15.9999 11C15.7347 11 15.4804 10.8946 15.2928 10.7071C15.1053 10.5196 14.9999 10.2652 14.9999 10V9H12.5849L3.87493 24.49C3.74497 24.7221 3.52815 24.893 3.27217 24.9652C3.01618 25.0374 2.742 25.005 2.50993 24.875C2.27787 24.745 2.10693 24.5282 2.03473 24.2722C1.96253 24.0162 1.99497 23.7421 2.12493 23.51L10.2899 9H2.99993C2.73471 9 2.48036 8.89464 2.29282 8.70711C2.10529 8.51957 1.99993 8.26522 1.99993 8C1.99993 7.73478 2.10529 7.48043 2.29282 7.29289C2.48036 7.10536 2.73471 7 2.99993 7H28.9999C29.2651 7 29.5195 7.10536 29.707 7.29289C29.8946 7.48043 29.9999 7.73478 29.9999 8C29.9999 8.26522 29.8946 8.51957 29.707 8.70711C29.5195 8.89464 29.2651 9 28.9999 9H21.7099L29.8749 23.51C29.9397 23.6248 29.9811 23.7513 29.9967 23.8822C30.0124 24.013 30.0021 24.1457 29.9663 24.2726C29.9305 24.3994 29.87 24.5179 29.7882 24.6213C29.7065 24.7247 29.6051 24.8109 29.4899 24.875ZM15.9999 14C15.7347 14 15.4804 14.1054 15.2928 14.2929C15.1053 14.4804 14.9999 14.7348 14.9999 15V17C14.9999 17.2652 15.1053 17.5196 15.2928 17.7071C15.4804 17.8946 15.7347 18 15.9999 18C16.2651 18 16.5195 17.8946 16.707 17.7071C16.8946 17.5196 16.9999 17.2652 16.9999 17V15C16.9999 14.7348 16.8946 14.4804 16.707 14.2929C16.5195 14.1054 16.2651 14 15.9999 14ZM15.9999 21C15.7347 21 15.4804 21.1054 15.2928 21.2929C15.1053 21.4804 14.9999 21.7348 14.9999 22V24C14.9999 24.2652 15.1053 24.5196 15.2928 24.7071C15.4804 24.8946 15.7347 25 15.9999 25C16.2651 25 16.5195 24.8946 16.707 24.7071C16.8946 24.5196 16.9999 24.2652 16.9999 24V22C16.9999 21.7348 16.8946 21.4804 16.707 21.2929C16.5195 21.1054 16.2651 21 15.9999 21Z"
					fill="#667185"
				/>
			</svg>
		),
		description: "Activities",
	},
	{
		id: 2,
		icon: (
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M30 26.0003H28V12.0003C28 11.4699 27.7893 10.9612 27.4142 10.5861C27.0391 10.211 26.5304 10.0003 26 10.0003H18V4.00032C18.0002 3.63815 17.9021 3.28272 17.7161 2.97195C17.5301 2.66118 17.2633 2.40675 16.944 2.23581C16.6247 2.06487 16.265 1.98384 15.9032 2.00137C15.5415 2.01889 15.1913 2.13432 14.89 2.33532L4.89 9.00032C4.61567 9.18335 4.39086 9.43137 4.23558 9.7223C4.0803 10.0132 3.99937 10.338 4 10.6678V26.0003H2C1.73478 26.0003 1.48043 26.1057 1.29289 26.2932C1.10536 26.4808 1 26.7351 1 27.0003C1 27.2655 1.10536 27.5199 1.29289 27.7074C1.48043 27.895 1.73478 28.0003 2 28.0003H30C30.2652 28.0003 30.5196 27.895 30.7071 27.7074C30.8946 27.5199 31 27.2655 31 27.0003C31 26.7351 30.8946 26.4808 30.7071 26.2932C30.5196 26.1057 30.2652 26.0003 30 26.0003ZM26 12.0003V26.0003H18V12.0003H26ZM6 10.6678L16 4.00032V26.0003H6V10.6678ZM14 14.0003V16.0003C14 16.2655 13.8946 16.5199 13.7071 16.7074C13.5196 16.895 13.2652 17.0003 13 17.0003C12.7348 17.0003 12.4804 16.895 12.2929 16.7074C12.1054 16.5199 12 16.2655 12 16.0003V14.0003C12 13.7351 12.1054 13.4808 12.2929 13.2932C12.4804 13.1057 12.7348 13.0003 13 13.0003C13.2652 13.0003 13.5196 13.1057 13.7071 13.2932C13.8946 13.4808 14 13.7351 14 14.0003ZM10 14.0003V16.0003C10 16.2655 9.89464 16.5199 9.70711 16.7074C9.51957 16.895 9.26522 17.0003 9 17.0003C8.73478 17.0003 8.48043 16.895 8.29289 16.7074C8.10536 16.5199 8 16.2655 8 16.0003V14.0003C8 13.7351 8.10536 13.4808 8.29289 13.2932C8.48043 13.1057 8.73478 13.0003 9 13.0003C9.26522 13.0003 9.51957 13.1057 9.70711 13.2932C9.89464 13.4808 10 13.7351 10 14.0003ZM10 21.0003V23.0003C10 23.2655 9.89464 23.5199 9.70711 23.7074C9.51957 23.895 9.26522 24.0003 9 24.0003C8.73478 24.0003 8.48043 23.895 8.29289 23.7074C8.10536 23.5199 8 23.2655 8 23.0003V21.0003C8 20.7351 8.10536 20.4808 8.29289 20.2932C8.48043 20.1057 8.73478 20.0003 9 20.0003C9.26522 20.0003 9.51957 20.1057 9.70711 20.2932C9.89464 20.4808 10 20.7351 10 21.0003ZM14 21.0003V23.0003C14 23.2655 13.8946 23.5199 13.7071 23.7074C13.5196 23.895 13.2652 24.0003 13 24.0003C12.7348 24.0003 12.4804 23.895 12.2929 23.7074C12.1054 23.5199 12 23.2655 12 23.0003V21.0003C12 20.7351 12.1054 20.4808 12.2929 20.2932C12.4804 20.1057 12.7348 20.0003 13 20.0003C13.2652 20.0003 13.5196 20.1057 13.7071 20.2932C13.8946 20.4808 14 20.7351 14 21.0003Z"
					fill="#667185"
				/>
			</svg>
		),
		description: "Hotels",
	},
	{
		id: 3,
		icon: (
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M23.1663 14.276L26.8088 10.8485L26.83 10.8273C27.5802 10.077 28.0017 9.05949 28.0017 7.9985C28.0017 6.93752 27.5802 5.91998 26.83 5.16975C26.0798 4.41952 25.0622 3.99805 24.0013 3.99805C22.9403 3.99805 21.9227 4.41952 21.1725 5.16975C21.1725 5.17725 21.1588 5.1835 21.1513 5.191L17.7238 8.8335L7.34876 5.0585C7.16994 4.99347 6.97628 4.98079 6.79052 5.02198C6.60475 5.06316 6.43459 5.15649 6.30001 5.291L3.30001 8.291C3.19547 8.39563 3.11544 8.52213 3.06568 8.66141C3.01593 8.80069 2.99769 8.94927 3.01227 9.09645C3.02686 9.24363 3.07391 9.38574 3.15004 9.51254C3.22616 9.63935 3.32947 9.74769 3.45251 9.82975L11.4388 15.1535L9.58626 16.9998H7.00001C6.73515 16.9999 6.48115 17.1051 6.29376 17.2923L3.29376 20.2923C3.17676 20.409 3.09051 20.5529 3.04272 20.7111C2.99494 20.8692 2.9871 21.0368 3.01991 21.1988C3.05273 21.3608 3.12517 21.5121 3.23076 21.6392C3.33636 21.7663 3.47181 21.8653 3.62501 21.9273L8.22751 23.7685L10.065 28.3623L10.0725 28.3823C10.1361 28.5361 10.2371 28.6717 10.3663 28.7767C10.4955 28.8816 10.6489 28.9527 10.8125 28.9833C10.9762 29.014 11.1449 29.0033 11.3034 28.9523C11.4618 28.9012 11.605 28.8114 11.72 28.691L14.7038 25.706C14.7971 25.6135 14.8713 25.5035 14.9222 25.3824C14.973 25.2612 14.9995 25.1312 15 24.9998V22.4135L16.845 20.5685L22.1688 28.5548C22.2508 28.6778 22.3592 28.7811 22.486 28.8572C22.6128 28.9334 22.7549 28.9804 22.9021 28.995C23.0492 29.0096 23.1978 28.9913 23.3371 28.9416C23.4764 28.8918 23.6029 28.8118 23.7075 28.7073L26.7075 25.7073C26.842 25.5727 26.9354 25.4025 26.9765 25.2167C27.0177 25.031 27.005 24.8373 26.94 24.6585L23.1663 14.276ZM23.1575 26.4298L17.8338 18.4448C17.7521 18.3208 17.644 18.2165 17.517 18.1395C17.3901 18.0626 17.2477 18.0148 17.1 17.9998C17.0663 17.9998 17.0338 17.9998 17.0013 17.9998C16.8698 17.9998 16.7397 18.0258 16.6183 18.0762C16.4969 18.1266 16.3866 18.2004 16.2938 18.2935L13.2938 21.2935C13.1061 21.4807 13.0005 21.7347 13 21.9998V24.586L11.3663 26.2198L9.92876 22.6248C9.87846 22.4999 9.8035 22.3866 9.70834 22.2914C9.61319 22.1963 9.49982 22.1213 9.37501 22.071L5.78251 20.6335L7.41501 18.9998H10C10.1314 18.9999 10.2615 18.9741 10.3829 18.9239C10.5043 18.8737 10.6146 18.8001 10.7075 18.7073L13.7075 15.7073C13.8123 15.6026 13.8925 15.476 13.9424 15.3366C13.9923 15.1972 14.0106 15.0485 13.996 14.9011C13.9814 14.7538 13.9343 14.6115 13.858 14.4846C13.7818 14.3577 13.6783 14.2493 13.555 14.1673L5.57001 8.84225L7.25751 7.156L17.66 10.9385C17.8433 11.0058 18.0423 11.0181 18.2324 10.9736C18.4226 10.9292 18.5955 10.8301 18.73 10.6885L22.5975 6.57475C22.9745 6.20881 23.4803 6.00589 24.0056 6.00985C24.531 6.0138 25.0337 6.22432 25.4051 6.59589C25.7765 6.96747 25.9868 7.47026 25.9905 7.99562C25.9943 8.52098 25.7911 9.0267 25.425 9.4035L21.3163 13.2698C21.1747 13.4042 21.0756 13.5772 21.0311 13.7673C20.9867 13.9575 20.9989 14.1565 21.0663 14.3398L24.8488 24.7423L23.1575 26.4298Z"
					fill="#667185"
				/>
			</svg>
		),
		description: "Flights",
	},
	{
		id: 4,
		icon: (
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M28.3162 7.05132L16.3162 3.05132C16.111 2.98289 15.889 2.98289 15.6838 3.05132L3.68375 7.05132C3.48463 7.1177 3.31145 7.24505 3.18873 7.41533C3.06601 7.58561 2.99998 7.79018 3 8.00007V18.0001C3 18.2653 3.10536 18.5196 3.29289 18.7072C3.48043 18.8947 3.73478 19.0001 4 19.0001C4.26522 19.0001 4.51957 18.8947 4.70711 18.7072C4.89464 18.5196 5 18.2653 5 18.0001V9.38757L9.19875 10.7863C8.0832 12.5886 7.72846 14.7599 8.21242 16.8235C8.69638 18.887 9.97949 20.6742 11.78 21.7926C9.53 22.6751 7.585 24.2713 6.1625 26.4538C6.08852 26.5638 6.03713 26.6873 6.01133 26.8173C5.98552 26.9473 5.98581 27.0811 6.01218 27.211C6.03854 27.3409 6.09046 27.4642 6.16492 27.5739C6.23937 27.6835 6.33488 27.7772 6.44588 27.8496C6.55688 27.922 6.68117 27.9717 6.81151 27.9956C6.94185 28.0195 7.07566 28.0173 7.20514 27.9891C7.33463 27.9609 7.45722 27.9072 7.56577 27.8312C7.67433 27.7552 7.7667 27.6583 7.8375 27.5463C9.72125 24.6563 12.6962 23.0001 16 23.0001C19.3037 23.0001 22.2788 24.6563 24.1625 27.5463C24.3092 27.7643 24.5357 27.9158 24.7932 27.9681C25.0507 28.0204 25.3184 27.9692 25.5385 27.8257C25.7586 27.6821 25.9133 27.4578 25.9692 27.2011C26.0252 26.9443 25.9779 26.6759 25.8375 26.4538C24.415 24.2713 22.4625 22.6751 20.22 21.7926C22.0188 20.6743 23.3007 18.8882 23.7846 16.8262C24.2684 14.7641 23.9148 12.5943 22.8013 10.7926L28.3162 8.95507C28.5154 8.88873 28.6886 8.7614 28.8114 8.59112C28.9342 8.42084 29.0002 8.21624 29.0002 8.00632C29.0002 7.79641 28.9342 7.59181 28.8114 7.42153C28.6886 7.25125 28.5154 7.12391 28.3162 7.05757V7.05132ZM22 15.0001C22.0003 15.9486 21.7756 16.8838 21.3445 17.7287C20.9134 18.5736 20.2881 19.3043 19.5199 19.8608C18.7517 20.4173 17.8625 20.7837 16.9253 20.93C15.9881 21.0763 15.0295 20.9983 14.1283 20.7024C13.2271 20.4065 12.4088 19.9011 11.7407 19.2277C11.0726 18.5544 10.5737 17.7322 10.2849 16.8287C9.99607 15.9251 9.92559 14.966 10.0792 14.0299C10.2329 13.0939 10.6063 12.2076 11.1687 11.4438L15.6838 12.9438C15.889 13.0123 16.111 13.0123 16.3162 12.9438L20.8312 11.4438C21.591 12.4738 22.0006 13.7202 22 15.0001ZM16 10.9463L7.1625 8.00007L16 5.05382L24.8375 8.00007L16 10.9463Z"
					fill="#667185"
				/>
			</svg>
		),
		description: "Study",
	},
	{
		id: 5,
		icon: (
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M27 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V27C3.00009 27.1704 3.04374 27.338 3.12681 27.4869C3.20988 27.6357 3.32961 27.7608 3.47463 27.8503C3.61965 27.9399 3.78516 27.9909 3.95543 27.9985C4.12569 28.0061 4.29508 27.97 4.4475 27.8937L8 26.1175L11.5525 27.8937C11.6914 27.9633 11.8446 27.9995 12 27.9995C12.1554 27.9995 12.3086 27.9633 12.4475 27.8937L16 26.1175L19.5525 27.8937C19.6914 27.9633 19.8446 27.9995 20 27.9995C20.1554 27.9995 20.3086 27.9633 20.4475 27.8937L24 26.1175L27.5525 27.8937C27.7049 27.97 27.8743 28.0061 28.0446 27.9985C28.2148 27.9909 28.3803 27.9399 28.5254 27.8503C28.6704 27.7608 28.7901 27.6357 28.8732 27.4869C28.9563 27.338 28.9999 27.1704 29 27V7C29 6.46957 28.7893 5.96086 28.4142 5.58579C28.0391 5.21071 27.5304 5 27 5ZM27 25.3825L24.4475 24.105C24.3086 24.0355 24.1554 23.9993 24 23.9993C23.8446 23.9993 23.6914 24.0355 23.5525 24.105L20 25.8825L16.4475 24.105C16.3086 24.0355 16.1554 23.9993 16 23.9993C15.8446 23.9993 15.6914 24.0355 15.5525 24.105L12 25.8825L8.4475 24.105C8.30857 24.0355 8.15535 23.9993 8 23.9993C7.84465 23.9993 7.69143 24.0355 7.5525 24.105L5 25.3825V7H27V25.3825ZM17 14C17 13.7348 17.1054 13.4804 17.2929 13.2929C17.4804 13.1054 17.7348 13 18 13H24C24.2652 13 24.5196 13.1054 24.7071 13.2929C24.8946 13.4804 25 13.7348 25 14C25 14.2652 24.8946 14.5196 24.7071 14.7071C24.5196 14.8946 24.2652 15 24 15H18C17.7348 15 17.4804 14.8946 17.2929 14.7071C17.1054 14.5196 17 14.2652 17 14ZM17 18C17 17.7348 17.1054 17.4804 17.2929 17.2929C17.4804 17.1054 17.7348 17 18 17H24C24.2652 17 24.5196 17.1054 24.7071 17.2929C24.8946 17.4804 25 17.7348 25 18C25 18.2652 24.8946 18.5196 24.7071 18.7071C24.5196 18.8946 24.2652 19 24 19H18C17.7348 19 17.4804 18.8946 17.2929 18.7071C17.1054 18.5196 17 18.2652 17 18ZM8 21H14C14.2652 21 14.5196 20.8946 14.7071 20.7071C14.8946 20.5196 15 20.2652 15 20V12C15 11.7348 14.8946 11.4804 14.7071 11.2929C14.5196 11.1054 14.2652 11 14 11H8C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4804 7 11.7348 7 12V20C7 20.2652 7.10536 20.5196 7.29289 20.7071C7.48043 20.8946 7.73478 21 8 21ZM9 13H13V19H9V13Z"
					fill="#667185"
				/>
			</svg>
		),
		description: "Visa",
	},
	{
		id: 6,
		icon: (
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M13 11V23C13 23.2652 12.8946 23.5196 12.7071 23.7071C12.5196 23.8946 12.2652 24 12 24C11.7348 24 11.4804 23.8946 11.2929 23.7071C11.1054 23.5196 11 23.2652 11 23V11C11 10.7348 11.1054 10.4804 11.2929 10.2929C11.4804 10.1054 11.7348 10 12 10C12.2652 10 12.5196 10.1054 12.7071 10.2929C12.8946 10.4804 13 10.7348 13 11ZM16 10C15.7348 10 15.4804 10.1054 15.2929 10.2929C15.1054 10.4804 15 10.7348 15 11V23C15 23.2652 15.1054 23.5196 15.2929 23.7071C15.4804 23.8946 15.7348 24 16 24C16.2652 24 16.5196 23.8946 16.7071 23.7071C16.8946 23.5196 17 23.2652 17 23V11C17 10.7348 16.8946 10.4804 16.7071 10.2929C16.5196 10.1054 16.2652 10 16 10ZM20 10C19.7348 10 19.4804 10.1054 19.2929 10.2929C19.1054 10.4804 19 10.7348 19 11V23C19 23.2652 19.1054 23.5196 19.2929 23.7071C19.4804 23.8946 19.7348 24 20 24C20.2652 24 20.5196 23.8946 20.7071 23.7071C20.8946 23.5196 21 23.2652 21 23V11C21 10.7348 20.8946 10.4804 20.7071 10.2929C20.5196 10.1054 20.2652 10 20 10ZM26 8V26C26 26.5304 25.7893 27.0391 25.4142 27.4142C25.0391 27.7893 24.5304 28 24 28H22V30C22 30.2652 21.8946 30.5196 21.7071 30.7071C21.5196 30.8946 21.2652 31 21 31C20.7348 31 20.4804 30.8946 20.2929 30.7071C20.1054 30.5196 20 30.2652 20 30V28H12V30C12 30.2652 11.8946 30.5196 11.7071 30.7071C11.5196 30.8946 11.2652 31 11 31C10.7348 31 10.4804 30.8946 10.2929 30.7071C10.1054 30.5196 10 30.2652 10 30V28H8C7.46957 28 6.96086 27.7893 6.58579 27.4142C6.21071 27.0391 6 26.5304 6 26V8C6 7.46957 6.21071 6.96086 6.58579 6.58579C6.96086 6.21071 7.46957 6 8 6H11V3C11 2.20435 11.3161 1.44129 11.8787 0.87868C12.4413 0.31607 13.2044 0 14 0L18 0C18.7956 0 19.5587 0.31607 20.1213 0.87868C20.6839 1.44129 21 2.20435 21 3V6H24C24.5304 6 25.0391 6.21071 25.4142 6.58579C25.7893 6.96086 26 7.46957 26 8ZM13 6H19V3C19 2.73478 18.8946 2.48043 18.7071 2.29289C18.5196 2.10536 18.2652 2 18 2H14C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V6ZM24 26V8H8V26H24Z"
					fill="#667185"
				/>
			</svg>
		),
		description: "Immigration",
	},
	{
		id: 7,
		icon: (
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M27 8H22V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4H13C12.2044 4 11.4413 4.31607 10.8787 4.87868C10.3161 5.44129 10 6.20435 10 7V8H5C4.46957 8 3.96086 8.21071 3.58579 8.58579C3.21071 8.96086 3 9.46957 3 10V26C3 26.5304 3.21071 27.0391 3.58579 27.4142C3.96086 27.7893 4.46957 28 5 28H27C27.5304 28 28.0391 27.7893 28.4142 27.4142C28.7893 27.0391 29 26.5304 29 26V10C29 9.46957 28.7893 8.96086 28.4142 8.58579C28.0391 8.21071 27.5304 8 27 8ZM12 7C12 6.73478 12.1054 6.48043 12.2929 6.29289C12.4804 6.10536 12.7348 6 13 6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V8H12V7ZM27 26H5V10H27V26ZM20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H17V21C17 21.2652 16.8946 21.5196 16.7071 21.7071C16.5196 21.8946 16.2652 22 16 22C15.7348 22 15.4804 21.8946 15.2929 21.7071C15.1054 21.5196 15 21.2652 15 21V19H13C12.7348 19 12.4804 18.8946 12.2929 18.7071C12.1054 18.5196 12 18.2652 12 18C12 17.7348 12.1054 17.4804 12.2929 17.2929C12.4804 17.1054 12.7348 17 13 17H15V15C15 14.7348 15.1054 14.4804 15.2929 14.2929C15.4804 14.1054 15.7348 14 16 14C16.2652 14 16.5196 14.1054 16.7071 14.2929C16.8946 14.4804 17 14.7348 17 15V17H19C19.2652 17 19.5196 17.1054 19.7071 17.2929C19.8946 17.4804 20 17.7348 20 18Z"
					fill="#667185"
				/>
			</svg>
		),
		description: "Medical",
	},
	{
		id: 8,
		icon: (
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M27.96 8.26828L16.96 2.24953C16.6661 2.08714 16.3358 2.00195 16 2.00195C15.6642 2.00195 15.3339 2.08714 15.04 2.24953L4.04 8.27078C3.72586 8.44267 3.46363 8.69573 3.28069 9.00357C3.09775 9.3114 3.00081 9.6627 3 10.0208V21.9758C3.00081 22.3339 3.09775 22.6852 3.28069 22.993C3.46363 23.3008 3.72586 23.5539 4.04 23.7258L15.04 29.747C15.3339 29.9094 15.6642 29.9946 16 29.9946C16.3358 29.9946 16.6661 29.9094 16.96 29.747L27.96 23.7258C28.2741 23.5539 28.5364 23.3008 28.7193 22.993C28.9023 22.6852 28.9992 22.3339 29 21.9758V10.022C28.9999 9.66331 28.9032 9.31123 28.7203 9.00268C28.5373 8.69413 28.2747 8.44047 27.96 8.26828ZM16 3.99953L26.0425 9.49953L22.3213 11.537L12.2775 6.03703L16 3.99953ZM16 14.9995L5.9575 9.49953L10.195 7.17953L20.2375 12.6795L16 14.9995ZM5 11.2495L15 16.722V27.4458L5 21.977V11.2495ZM27 21.972L17 27.4458V16.727L21 14.5383V18.9995C21 19.2648 21.1054 19.5191 21.2929 19.7066C21.4804 19.8942 21.7348 19.9995 22 19.9995C22.2652 19.9995 22.5196 19.8942 22.7071 19.7066C22.8946 19.5191 23 19.2648 23 18.9995V13.4433L27 11.2495V21.9708V21.972Z"
					fill="#667185"
				/>
			</svg>
		),
		description: "Vacation Packages",
	},
];
export default DashBoard;
