import React from "react"
import { Container } from "./styles"

type CaseColumnType = {
	className: string
	title: string
	children: React.ReactNode
}

const CaseColumn = (props: CaseColumnType) => {
	return <Container className={`${props.className}`}>
		<div className={"cinformation-container"}>
			<p className={"title"}>{props.title}</p>
			<div className={"values"}>
				<ol>
					{props.children}
				</ol>
			</div>
		</div>
	</Container>
}

export default CaseColumn;