import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cf.bstatic.com",
			},
		],
	},
};

export default nextConfig;
