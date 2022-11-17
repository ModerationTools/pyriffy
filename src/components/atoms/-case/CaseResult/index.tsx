import React from "react";
import { useCaseContext } from "../../../../core/store/CaseContext";
import { useSolutionContext } from "../../../../core/store/SolutionContext";
import { Container } from "./styles"

const CaseResult = () => {
	const { currentCase }: any = useCaseContext()
	const { compiled } = useSolutionContext()

	
	function getPercent(v1: number, v2: number) {
		return (v1 / v2) * 100
	}
	
	function range(size: Number, startAt = 0) {
		return [...Array(size).keys()].map(i => i + startAt);
	}
	
	let counter = 0
	const cases = currentCase.cases
	if (cases) {
		range(currentCase.maxCase).forEach(value => {
			if (!cases.has(String(value + 1))) {
				counter++
			}
		})
	}
	
	const totalPassed = Number(compiled?.totalPassed || 0) + counter
	const totalCases = currentCase.maxCase

	const getColor = () => {
		const p = getPercent(totalPassed, totalCases)
		if (p >= 100) {
			return "#3abe41"
		}

		if (p > 50) {
			return "#ff9c19"
		}

		if (p > 25) {
			return "#e7c62f"
		}

		return "#ff3131"
	}

	return <Container style={{
		background: getColor()
	}}>
		<h1>Casos corretos: <span>{totalPassed}/{totalCases}</span></h1>
	</Container>
}

export default CaseResult