import { styled } from "../../../../core/config/styling/stitches";

export const Container = styled("div", {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,

    "> div": {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "$gray900",
    },

    ".selected": {
        background: "$gray700",
        content: "",
        padding: 1,
        boxSizing: "content-box"
    }
})