import { styled } from '../../../core/config/styling/stitches'

export const Container = styled("div", {
	background: "$baseVariant1",
	userSelect: "none",
	"-webkit-user-select": "none",
	"-webkit-app-region": "drag",
	
	display: "flex",
	justifyContent: "space-between",
})