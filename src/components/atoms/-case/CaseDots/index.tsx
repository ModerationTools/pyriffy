import React from "react"
import { Container } from "./styles"

type PropsType = {
	maxCases: number,
	currentCase: number
}

const CaseDots = ({ currentCase, maxCases }: PropsType) => {

	function range(size: Number, startAt = 0) {
		return [...Array(size).keys()].map(i => i + startAt);
	}

	return <Container>
		{range(maxCases).map(c => {
			if (c === currentCase) {
				return <div key={c} className="selected"></div>
			}

			return <div></div>
		})}
	</Container>
}

export default CaseDots;