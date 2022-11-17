import { styled } from "../../../core/config/styling/stitches"

const Button = styled("button", {
    border: 0,
    cursor: "pointer",
    fontFamily: "$roboto",

    variants: {
        size: {
            bg: {
                fontSize: "$2",
                padding: ".35rem 1.2rem",
            },
            md: {
                fontSize: "$2",
                padding: ".30rem 1.5rem",
            },
            sm: {
                fontSize: "$2",
                padding: ".25rem 1.75rem",
            },
        },
        color: {
            gray: {
                backgroundColor: "$gray900",
                color: "$gray500",

                "&:hover": {
                    backgroundColor: "$gray800",
                },
            },
            primary: {
                background: "$primary",
                color: "#FFFFFF",

                "&:hover": {
                    backgroundColor: "$primaryHover",
                },
            },
            secondary: {
                background: "$secondary",
                color: "#791515",

                "&:hover": {
                    backgroundColor: "$secondaryHover",
                    color: "#8d1c1c",
                },
            },
        },
        boxShadow: {
            none: {
                boxShadow: "none",
            },

            1: {
                boxShadow: "1px 0px 5px 1px $colors$gray700",
            },

            2: {
                boxShadow: "1px 0px 7px 1px $colors$gray600",
            },

            3: {
                boxShadow: "1px 0px 15px 1px $colors$gray500",
            },
        },
        borded: {
            true: {
                borderRadius: 5,
            },
        },

        weight: {
            light: {
                fontWeight: "400",
            },

            bold: {
                fontWeight: "500",
            },

            extrabold: {
                fontWeight: "600",
            },
        },
    },

    defaultVariants: {
        size: "md",
        color: "gray",
        borded: false,
        boxShadow: "none",
        weight: "light",
    },
})

export default Button
