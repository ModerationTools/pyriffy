import globalStyles from "./globalStyles"
import Titlebar from './molecules/Titlebar'

import { styled } from "../core/config/styling/stitches";
import Credits from "./atoms/Credits";
import Case from "./templates/Case";

import { CaseProvider } from "../core/store/CaseContext";
import { SolutionProvider } from "../core/store/SolutionContext";
import { useEffect } from "react";

const Container = styled("div", {
    background: "$base",
    width: "100vw",
    height: "calc(100vh - 35px)",

    overflowX: "hidden",
})

function App() {
    globalStyles()

    useEffect(() => {
        window.Main.on("update_available", () => {
            alert("Uma nova atualização foi encontrada. Automaticamente atualizando...")
        })

        window.Main.on("update_downloaded", () => {
            alert("Download finalizado!")
        })
    }, [])

    return (<CaseProvider>
        <SolutionProvider>
            <Titlebar />

            <Container>
                <Credits />
                <Case /> 
            </Container>
        </SolutionProvider>
    </CaseProvider>);
}

export default App;
