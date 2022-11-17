import CaseSelector from "../../molecules/-case/CaseSelector"
import { Container } from "./styles"
import CaseHeader from "../../atoms/-case/CaseHeader";
import { useCaseContext } from "../../../core/store/CaseContext";
import CaseRenderer from "../../molecules/-case/CaseRenderer";

const Case = () => {
    const { read } = useCaseContext()

    return <Container>
        {
            !read ? 
                <CaseSelector />
            :
                <>
                    <CaseHeader />
                    <CaseRenderer />
                </>
        }
    </Container>
}

export default Case
