import { Container, Content, Divider } from "./styles"
import {AiFillFileZip} from "react-icons/ai";
import { useCaseContext } from "../../../../core/store/CaseContext";

const CaseHeader = () => {
	const { currentCase } = useCaseContext()

	return <section>
		<Container>
			<AiFillFileZip />
			<Content>
				<h1>{currentCase.name}</h1>
				<div>
					<p>{currentCase.path}</p>
				</div>
			</Content>
		</Container>
		<hr className={Divider()} color={"#eeeeee"} />
	</section>
}

export default CaseHeader