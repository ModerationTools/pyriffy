import { styled } from "../../../../core/config/styling/stitches"

export const Container = styled("div", {
    display: "flex",
    flexDirection: "column",
})

export const Content = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "$gridWidth",
    margin: "auto",
    padding: "15px 0 55px 0",

    code: {
        color: "#ff6565",
        margin: 30
    }
})