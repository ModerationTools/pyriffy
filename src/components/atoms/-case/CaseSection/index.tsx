import React from "react";
import { Container, } from "./styles"

type PropsType = {
	title: string
	subtitle: string
	children: React.ReactNode
}

const CaseSection = (props: PropsType) => {
	return <Container>
		<h2>{props.title}</h2>
		<p>{props.subtitle}</p>

		{props.children}
	</Container>
}

export default CaseSection