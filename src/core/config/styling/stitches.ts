import { createStitches } from "@stitches/react"
import {ThemeOptions} from "./theme";

const {
    theme: defaultTheme,
    css: themeCss,
    styled: themeStyled,
    getCssText: themeGetCssText,
    globalCss: themeGlobalCss
} = createStitches({
    media: {
        bp1: "(max-width: 1250px)",
        bp2: "(max-width: 1050px)",
        bp3: "(max-width: 950px)",
    },
    theme: ThemeOptions
})

export const theme = defaultTheme
export const css = themeCss
export const styled = themeStyled
export const getCssText = themeGetCssText
export const globalCss = themeGlobalCss
