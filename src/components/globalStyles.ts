import { globalCss } from "@stitches/react"

const globalStyles = globalCss({
    body: {
        width: "100vw",
        height: "100vh",
        fontFamily: "$roboto",
        overflowX: "hidden",
        background: "$base",
        userSelect: "none",

        "@bp1": {
            background: "red"
        },

        "@bp2": {
            background: "green"
        },

        "@bp3": {
            background: "blue"
        }
    },

    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",

        outlineColor: "$gray900"
    },

    "h1, h2, h3, h4, h5, h6": {
        fontWeight: 600,
    },

    h1: {
        fontSize: "2rem",
    },

    h2: {
        fontSize: "1.5rem",
    },

    "::-webkit-scrollbar": {
        width: "8px",
    },

    "::-webkit-scrollbar-track": {
        background: "$gray1000",
    },

    "::-webkit-scrollbar-thumb": {
        background: "$gray900",
        padding: 10,
    },

    "::-webkit-scrollbar-thumb:hover": {
        background: "$gray800",
    },
})

export default globalStyles
