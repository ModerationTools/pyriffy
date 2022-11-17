import { styled } from '../../../core/config/styling/stitches'

export const Container = styled("div", {
    position: "absolute",
    bottom: "13px",
    left: -8,
    background: "$gray1000",
    borderRadius: 10,
    border: "1px solid $colors$primaryVariant2",
    
})

export const Content = styled("div", {
    fontSize: 12,
    padding: "5px 14px 5px 18px",
    color: "$gray500",

    "a": {
        color: "$gray500",
        "&:hover": {
            color: "$gray500"
        }
    }
})