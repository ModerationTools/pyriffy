import React from "react";
import { SolvedType, useSolutionContext } from "../../../../core/store/SolutionContext";
import CaseColumn from "../../../atoms/-case/CaseColumn";
import { CaseType } from "../../../organisms/CasesTable";
import { Container } from "./styles";

type PropsType = {
    currentCase: CaseType
    compiled: SolvedType | undefined
}

const CaseColumnList = ({ currentCase, compiled }: PropsType) => {
    const {error} = useSolutionContext()
    
    const compiledCase = compiled?.cases?.find(c => {
        return Number(c.name) === Number(currentCase.name)
    })

    return <Container>
        <CaseColumn className="inputs" title="Entrada de dados">
            <React.Fragment>
                <ol>
                    {(!currentCase.inputs[0]) ? <span className="empty">Sem entradas.</span> :
                        currentCase.inputs.map(input => {
                            return <li key={input}>
                                <pre>{input}</pre>
                            </li>
                        })
                    }
                </ol>
            </React.Fragment>
        </CaseColumn>

        <CaseColumn className="outputs" title="Saída esperada">
            <React.Fragment>
                <ol>
                    {(!currentCase.outputs[0]) ? <span className="empty">Sem saídas.</span> :
                        currentCase.outputs.map(output => {
                            return <li key={output}>
                                <pre>{output}</pre>
                            </li>
                        })
                    }
                </ol>
            </React.Fragment>
        </CaseColumn>

        {compiledCase && !error &&
            <CaseColumn className="user-outputs" title="Saída de sua solução">
                {(!compiledCase.output[0]) ? <span className="empty">Sem saídas.</span> :
                    compiledCase.output.map(cc => <li key={cc.index}>

                        <div>
                            <pre className={cc.passed ? "right" : "wrong"}>
                                {cc.out === " " ? `'${cc.out}'` : cc.out}
                            </pre>
                        </div> 
                    </li>
                    )
                }
            </CaseColumn>
        }
    </Container>
}

export default CaseColumnList;