import React from "react"
import { AiFillCloseCircle } from "react-icons/ai";
import { FaClosedCaptioning, FaFileCode, FaPlay, FaRecycle, FaWindowClose } from "react-icons/fa";
import { VscChromeClose, VscClose, VscCloseAll, VscRemove } from "react-icons/vsc";
import { useCaseContext } from "../../../../core/store/CaseContext";
import { useSolutionContext } from "../../../../core/store/SolutionContext";
import { Container, Content } from "./styles"

const CaseActions = () => {
	const { solutionDir, setSolutionDir, setCompiled, compiled } = useSolutionContext()
	const { currentCase, clearCase } = useCaseContext()

	function closeCase() {
		clearCase()
		setSolutionDir(undefined)
		setCompiled(undefined)
	}

	function hasCase() {
		if (solutionDir && compiled) {
			return !!compiled.cases
		}

		return false
	}

	return <Container>
		{solutionDir && <p>Arquivo importado (.py): <span>{solutionDir}</span></p>}
		<Content style={{ width: solutionDir ? "auto" : "100%" }}>

			<button onClick={() => { window.Main.openSelectSolutionDialog() }} className="select"><FaFileCode /> Importar código</button>


			<button onClick={() => {
				if (solutionDir && currentCase)
					window.Main.executeTest(solutionDir, currentCase)
			}} className={`run btn${solutionDir ? "" : " unable"}`}>
				<FaPlay />
			</button>


			<button onClick={() => {
				if (compiled) {
					setCompiled(undefined)
				}
			}} className={`restart btn ${hasCase() ? "" : " unable"}`}>
				<FaRecycle />
			</button>


			<button onClick={closeCase} className="close btn">
				<VscClose />
			</button>

		</Content>
	</Container>
}

export default CaseActions;