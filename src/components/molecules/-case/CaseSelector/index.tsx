import { Container, Content } from "./styles"
import Link from "../../../atoms/Link";
import DropFile from "../../../atoms/DropFile";

import illustration from "../../../../../assets/illustration.svg"

const CaseSelector = () => {
    return <Container>
        <img src={illustration} alt="Ilustração" />
        <Content>
            <h1>
                <br />
                Seja bem vindo(a)!</h1>
            <p className={"message"}>Para o Pyriffy identificar os casos de testes necessários, <strong>clique no botão abaixo</strong> ou arraste o arquivo na divisão apropriada.</p>
            <p className={"additional"}>Caso seja sua primeira vez aqui, recomendamos fortemente que você acesse o <Link link={"https://retacky.notion.site/Piriffy-App-fd1021ac8ab74059b668bead74f309f3"}>nosso guia</Link>.</p>

            <DropFile
                acceptedFiles={[".zip", ".rar"]}
                onDrop={(file: string) => {
                    if (file) {
                        window.Main.readCase(file)
                    }
                }}
                onClick={() => {
                    window.Main.openReadCaseDialog()
                }}
            />
        </Content>
    </Container>
}

export default CaseSelector
