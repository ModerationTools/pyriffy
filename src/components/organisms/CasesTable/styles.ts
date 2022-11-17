import { styled } from '../../../core/config/styling/stitches'

export const Container = styled("div", {
    border: "solid 1px #52525213",
    width: "100%",
})

export const Header = styled("header", {
    background: "#f8f8f8e8",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,

    p: {
        color: "$gray500",
        fontSize: "14px",
    },

    button: {
        background: "transparent",
        border: "none",
        fontSize: 20,
        cursor: "pointer",
        color: "$gray500",
        padding: "10px 70px",
    },

    ".unable": {
        color: "$gray800",
        cursor: "no-drop"
    },

    "> div": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        gap: 7
    }
})


export const Content = styled("div", {
    display: "flex",

    ".case-not-found": {
        width: "100%",
        textAlign: "center",
        margin: "35px 0",
        fontSize: "16px",
        color: "$gray700"
    },
})
