export interface Root {
	status: boolean;
	message: string;
	timestamp: number;
	data: IHotelData;
}

export interface IHotelData {
	hotels: Hotel[];
	meta: Meum[];
	appear: Appear[];
}

export interface Hotel {
	hotel_id: number;
	accessibilityLabel: string;
	property: Property;
}

export interface Property {
	wishlistName: string;
	isFirstPage: boolean;
	reviewScore: number;
	qualityClass: number;
	checkout: Checkout;
	name: string;
	isPreferred?: boolean;
	mainPhotoId: number;
	countryCode: string;
	checkin: Checkin;
	checkoutDate: string;
	optOutFromGalleryChanges: number;
	reviewScoreWord: string;
	latitude: number;
	accuratePropertyClass: number;
	currency: string;
	priceBreakdown: PriceBreakdown;
	reviewCount: number;
	photoUrls: string[];
	id: number;
	position: number;
	checkinDate: string;
	rankingPosition: number;
	blockIds: string[];
	propertyClass: number;
	ufi: number;
	longitude: number;
}

export interface Checkout {
	fromTime: string;
	untilTime: string;
}

export interface Checkin {
	untilTime: string;
	fromTime: string;
}

export interface PriceBreakdown {
	grossPrice: GrossPrice;
	taxExceptions: any[];
	benefitBadges: BenefitBadge[];
	excludedPrice?: ExcludedPrice;
	strikethroughPrice?: StrikethroughPrice;
}

export interface GrossPrice {
	currency: string;
	value: number;
}

export interface BenefitBadge {
	variant: string;
	identifier: string;
	explanation: string;
	text: string;
}

export interface ExcludedPrice {
	value: number;
	currency: string;
}

export interface StrikethroughPrice {
	currency: string;
	value: number;
}

export interface Meum {
	title: string;
}

export interface Appear {
	id?: string;
	component?: Component;
	contentUrl?: string;
}

export interface Component {
	props: Props;
}

export interface Props {
	text?: string;
	title?: string;
	fill?: boolean;
	content?: Content;
}

export interface Content {
	props: Props2;
}

export interface Props2 {
	items: Item[];
	fitContentWidth: boolean;
}

export interface Item {
	props: Props3;
}

export interface Props3 {
	component?: Component2;
}

export interface Component2 {
	props: Props4;
}

export interface Props4 {
	tertiaryTintedColor?: string;
	variant?: string;
	accessibilityLabel?: string;
	icon?: string;
	items?: Item2[];
	spacing?: string;
}

export interface Item2 {
	props: Props5;
}

export interface Props5 {
	text: Text[];
}

export interface Text {
	font: string;
	text: string;
	color?: string;
	linkActions?: LinkAction[];
}

export interface LinkAction {
	props: Props6;
}

export interface Props6 {
	url: string;
}
