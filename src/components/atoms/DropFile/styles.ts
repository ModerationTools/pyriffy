import { styled } from '../../../core/config/styling/stitches'

export const Container = styled("div", {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    
    small: {
        color: "#ff8989",
        marginTop: "$4",
        fontSize: "$2",
        textDecoration: "italic"
    },
    
    "& .dropzone": {
        height: 120,
        width: "100%",
        padding: "30px 80px",
        border: "2px dashed $colors$gray900",
        borderRadius: 8,
        color: "$gray700",
        margin: "auto",

        "input:focus": {
            background: "red"
        }
    }
})

export const Content = styled("div", {
    margin: "auto",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,

    small: {
        color: "#ff8989"
    }
})