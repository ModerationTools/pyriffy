import { Container, Content } from "./styles"
import CasesTable from "../../../organisms/CasesTable";
import CaseResult from "../../../atoms/-case/CaseResult";
import { useSolutionContext } from "../../../../core/store/SolutionContext";
import CaseActions from "../../../atoms/-case/CaseActions";

const CaseRenderer = () => { 
    const { solutionDir, compiled, error, setError } = useSolutionContext()

    window.Main.on("error-compiled-solution", (error) => {
        setError(error)
    })

    window.Main.on("compiled-solution", () => {
        setError(undefined)
    })

    return <Container>
        <Content>
            <CaseActions />
            {solutionDir && <>
                {compiled && !error && <CaseResult />}
            </>
            }
            {error && <code>Error: {error}</code>}
            <CasesTable />
        </Content>
    </Container>
}

export default CaseRenderer 