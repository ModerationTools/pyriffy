import { styled } from "../../../../core/config/styling/stitches";

export const Container = styled("div", {
    width: "$gridWidth",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    
    marginTop: -15,
    marginBottom: 6,

    p: {
        borderLeft: "3px solid #ececec",
        padding: 3,

        
        flex: 1,
        fontSize: 14,
        color: "$gray500",
        width: "200px",
        
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        
        
        paddingLeft: 6,
        marginRight: 20,

        span: {
            color: "$gray700"
        }
    }
})



export const Content = styled("div", {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 5,

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        border: 0,
        padding: 3,
        fontSize: 15,
        borderRadius: 4,

        cursor: "pointer"

    },

    ".select": {
        marginRight: 14,
        background: "#eeeeee",
        color: "#747474",
        padding: "3px 11px",

        "svg": {
            marginRight: 10,
            fontSize: 14
        }
    },

    ".btn": {
        width: 23,
        height: 23,
        cursor: "pointer",

        color: "#ffffff"
    },

    ".close": {
        background: "#ff6565",
        color: "#c53939",
        stroke: "black",
    },

    ".restart": {
        background: "#f8bf45",
        color: "#705519",
    },

    ".run": {
        background: "#4fce35",
        color: "#ffffff",

        "&:hover": {
            background: "#46bd2e"
        },

        fontSize: 10
    },

    ".unable": {
        opacity: 0.4,
        cursor: "no-drop"
    }
})