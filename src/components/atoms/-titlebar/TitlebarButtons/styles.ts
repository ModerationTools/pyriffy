import { styled } from '../../../../core/config/styling/stitches'

export const Container = styled("div", {
	display: "flex",
	alignItems: "center",
	"-webkit-app-region": "no-drag",

	"button": {
		background: "transparent",
		border: 0,
		fontSize: "$3",
		padding: "$2 $2 $1 $2",
		cursor: "pointer",

		boxSizing: "content-box",

		color: "$gray500",

		outlineColor: "transparent",
	},

	"button:hover": {
		background: "$gray900",
		color: "$gray500"
	},

	"button.close:hover": {
		background: "#ff7676",
		color: "$baseVariant1",
	}
})