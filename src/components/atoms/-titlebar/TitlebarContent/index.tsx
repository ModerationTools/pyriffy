import { Container } from "./styles"

// @ts-ignore
import logo from "../../../../../assets/logo.svg"
import { useEffect, useState } from "react"

const TitlebarContent = () => {
	const [version, setVersion] = useState("Loading...")

	useEffect(() => {
		window.Main.on("version-ready", (version) => {
			setVersion("LTS-" + version)
		})
	}, [])

	return <Container>
		<img src={logo} alt="Logo oficial" />
		<p>Pyriffy App [{version}]</p>
	</Container>
}

export default TitlebarContent