import {css, styled} from '../../../../core/config/styling/stitches'

export const Container = styled("header", {
    width: "$gridWidth",
    margin: "auto",
    padding: "40px 0px 15px 0px",
    display: "flex",
    flex: 1,
    alignItems: "center",
    gap: 10,

    "> svg": {
        fontSize: 40,
        margin: 0
    },

    hr: {
        margin: "6px 0",
        border: "none",
        outline: 0,
        background: "red"
    }
})

export const Content = styled("header", {
    flexGrow: "1",

    "> h1": {
        fontSize: "$5",
        color: "$gray400",
        letterSpacing: ".9px",
        maxWidth: "600px",
    },

    "p": {
        fontSize: "$1",
        color: "$gray700",

        maxWidth: "850px",
    },

    "> h1, p": {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },

    "a": {
        fontSize: "$1",

        display: "flex",
        alignItems: "center",
        gap: 10,

        "& svg": {
            fontSize: 14
        },
    },

    "> div": {
        display: "flex",
        justifyContent: "space-between"
    },
})

export const Divider = css({
    width: "$gridWidth",
    margin: "auto",
    height: 1,
    border: 0
})