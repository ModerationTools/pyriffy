import { styled } from "../../../../core/config/styling/stitches"

export const Container = styled("div", {
    width: "$gridWidth",
    margin: "auto",

    height: "94vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    img: {
        // width: -350,
        height: 150,
    }
})

export const Content = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",

    h1: {
        fontSize: "$8",
        marginBottom: "$5",
        fontWeight: 600,
        letterSpacing: 0.5,
        color: "#575757",
        textAlign: "left",

        svg: {
            fontSize: 40,
            marginBottom: "$2"
        }
    },

    p: {
        color: "$gray600",

        strong: {
            fontWeight: 500,
        }
    },

    "> .message": {
        width: 550,
        margin: "auto"
    },

    "> .additional": {
        marginTop: "$3",
        marginBottom: "$6"
    },

    "h1, p": {
        textAlign: "center"
    },

    "> .button": {
        width: 150,
        margin: "auto"
    },
})