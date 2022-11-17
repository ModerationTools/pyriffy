import { useDropzone } from "react-dropzone";
import { Container, Content } from "./styles"
import { useState } from "react";

type PropsType = {
    acceptedFiles: string[]
    onDrop?: (file: string) => void
    onClick?: () => void
    target?: string
}

const DropFile = (props: PropsType) => {
    const [warn, setWarn] = useState(false)

    const {
        getRootProps,
        getInputProps,
        isDragAccept,
    } = useDropzone({
        accept: { "application/*": [] },
        maxFiles: 1,
        noClick: true,
        onDropAccepted: files => {
            if (files.length === 0) return

            const file = files[0]
            let called = false
            props.acceptedFiles.forEach(acceptedFile => {
                if (file.name.endsWith(acceptedFile)) {
                    called = true
                    if (props.onDrop) {
                        props.onDrop(file.path)
                    }
                }
            })

            if (!called) {
                setWarn(true)

                setTimeout(() => {
                    setWarn(false)
                }, 10000)
            }
        },
    })

    const style = {
        background: isDragAccept ? "#eeeeee" : "transparent",
        color: "#969696",
        cursor: "pointer"
    }

    return <Container onClick={() => {
        if (props.onClick) {
            props.onClick()
        }
    }}>
        <Content {...getRootProps({className: "dropzone", style})}>
            <input {...getInputProps()} />
            <p>{props.target ? props.target : "Arraste o arquivo aqui, ou clique para selecionar"}</p>
        </Content >
        {warn &&
            <small>Formato incorreto: escolha arquivos com as extensões:
                <strong>{props.acceptedFiles.map(f => " " + f)}</strong>
            </small>
        }
    </Container>
}

export default DropFile