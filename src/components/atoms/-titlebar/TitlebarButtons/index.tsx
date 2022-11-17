import { Container } from "./styles"

// VscChromeMaximize
import { VscChromeMinimize, VscChromeRestore, VscChromeClose } from "react-icons/vsc"

const TitlebarButtons = () => {
	return <Container>
		<button tabIndex={-1} onClick={() => {
			window.Main.minimize()
		}}>
		
			<VscChromeMinimize />
		</button>
		
		<button tabIndex={-1} onClick={() => { 
			window.Main.maximize()
		 }}>
			<VscChromeRestore  />
		</button>
		<button className={"close"} tabIndex={-1} onClick={() => {
			window.Main.close()
		}}>
			<VscChromeClose />
		</button>
	</Container>
}

export default TitlebarButtons