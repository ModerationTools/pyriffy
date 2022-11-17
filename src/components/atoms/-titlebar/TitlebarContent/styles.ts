import { styled } from '../../../../core/config/styling/stitches'

export const Container = styled("div", {
	display: "flex",
	alignItems: "center",
	padding: "$1 $2",

	"img": {
		width: 20,
		marginRight: "$2"
	},

	"p": {
		color: "$gray500",
		fontSize: "$2"
	}
})