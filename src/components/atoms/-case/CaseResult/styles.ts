import { styled } from '../../../../core/config/styling/stitches'

export const Container = styled("div", {
    marginTop: 0,
    marginBottom: 30,
    color: "#ffffff",
    background: "#ff933b",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: 1,
    margin: "0",

    h1: {
        fontSize: "$2",
        fontWeight: "300",

        span: {
            fontWeight: "bold",
        }
    },
})
