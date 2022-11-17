import { styled } from '../../../../core/config/styling/stitches'

export const Container = styled("div", {
    display: "flex",
    flex: 1,

    ".empty": {
        color: "$gray700",
    },

    "li pre": {
        maxWidth: "100%",
        wordBreak: "break-all",
        whiteSpace: "break-spaces",

        ".space": {
            margin: 2
        },
    },

    "li div": {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",

        svg: {
            paddingRight: 5,
            fontSize: 20,
        },

        ".right": {
            color: "#39b339"
        },

        ".wrong": {
            color: "#ff5252"
        }
    },

    ".user-outputs .values": {
        "li": {
            display: "flex",
            justifyContent: "space-between",
            gap: 20,

            pre: {
                ".space": {
                    margin: 2
                },
            }
        },
    }
})