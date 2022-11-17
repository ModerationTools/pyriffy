import React, {useState} from "react";
import { useCaseContext } from "../../../core/store/CaseContext";
import { useSolutionContext } from "../../../core/store/SolutionContext";
import CaseDots from "../../atoms/-case/CaseDots";
import CaseColumnList from "../../molecules/-case/CaseColumnList";
import { Container, Header, Content } from "./styles"

export type CaseType = {
	name: string,
	inputs: string[],
	outputs: string[]
}

const CasesTable = () => {
	
	const { compiled } = useSolutionContext()

	const { currentCase: storagedCase }: any = useCaseContext()

	const formattedCase = formatCases()

	const [showingCase, setShowingCase] = useState(0)
	const currentCase = formattedCase[showingCase]


	function formatCases() {
		const caseList: Array<CaseType> = []
		
		if (storagedCase.cases) {
			let count = 0
			while (count !== storagedCase.maxCase) {
				count++

				let storaged = false
				storagedCase.cases.forEach((v, k) => {
					if (count === Number(k)) {
						caseList.push({
							name: k,
							inputs: v.inputs,
							outputs: v.outputs
						})

						storaged = true
					}
				})

				if (!storaged) {
					caseList.push({
						name: String(count),
						inputs: [],
						outputs: []
					})
				}
			}
		}

		return caseList
	}

	const hasNextPage = () => {
		return showingCase + 1 !== storagedCase.maxCase
	}

	const nextPage = () => {
		if (hasNextPage()) {
			setShowingCase(showingCase + 1)
		}
	}

	const previousPage = () => {
		if (showingCase !== 0) {
			setShowingCase(showingCase - 1)
		}
	}

	return <Container>
		<Header>
			<button className={showingCase === 0 ? 'unable' : ''} onClick={previousPage}>«</button>
			<div>
				<p>Caso {currentCase.name}</p>
				<CaseDots maxCases={storagedCase.maxCase} currentCase={showingCase} />
			</div>
			<button className={hasNextPage() ? '' : 'unable'} onClick={nextPage}>»</button>
		</Header>
		<Content>
			{currentCase.inputs.length === 0 && currentCase.outputs.length === 0 ?
			<div className="case-not-found">
				<p>As entradas e saídas deste desafio não foram definidas.</p>
				<p>Mas não se preocupe, esta será desconsiderada no run.codes.</p>
			</div>
				:

				<>
					<CaseColumnList compiled={compiled} currentCase={currentCase} />
				</>
			}
		</Content>
	</Container>
}

export default CasesTable