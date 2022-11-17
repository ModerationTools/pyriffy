import { styled } from "../../../../core/config/styling/stitches";

export const Container = styled("div", {
    border: "solid 1px #f8f8f8",
    paddingLeft: 15,
    width: "100%",
    color: "$gray500",
    fontSize: 13.5,

    ".cinformation-container": {
        padding: 7,
    },

    ol: {
        userSelect: "text",
        listStyle: "none",
        display: "flex",
        flexDirection: "column",

        li: {
            flexGrow: 0,
            display: "inline",
            margin: "5px 0",
            
            pre: {
                color: "$gray600",
                background: "#f8f8f8",
                display: "inline-block",
                padding: 1,
                fontSize: 14,
                fontFamily: "$roboto"
            }
        }
    },

    ".title": {
        fontWeight: "bold",
        marginBottom: 4
    },
})