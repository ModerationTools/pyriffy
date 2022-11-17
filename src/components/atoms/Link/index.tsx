import React from "react";
import {styled} from "../../../core/config/styling/stitches";

type PropsType = {
    children: React.ReactNode,
    link: string
    onClick?: () => void
}

const LinkElement = styled("a", {
    color: "$secondary",
    textDecoration: "underline",
    cursor: "pointer",

    "&:hover": {
        color: "$secondaryHover"
    }
})

const Link = (props: PropsType) => {
    function onClick(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault()

        if (props.onClick) {
            props.onClick()
        }
        if (props.link)
            window.Main.openUrl(props.link)
    }

    return <LinkElement onClick={onClick} href={props.link}>{props.children}</LinkElement>
}

export default Link