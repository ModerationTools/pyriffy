import React, { createContext, useContext, useEffect, useState } from "react";
import ChallengeType from "../../@types/ChallengeType";

export type SolvedType = {
    name: string,
    totalPassed: number,
    passedAll?: boolean
    cases: Array<ChallengeType>
}

type ISolutionContext = {
    solutionDir: string | undefined
    setSolutionDir: (solDir: string) => void

    compiled: SolvedType | undefined
    setCompiled: (compiled: SolvedType) => void

    error: string
    setError: (error: string) => void
}

export const SolutionContext = createContext({} as ISolutionContext);

export const SolutionProvider: React.FC = ({ children }) => {
    const [solutionDir, setSolutionDir] = useState<string | undefined>();
    const [compiled, setCompiled] = useState<SolvedType | undefined>()
    const [error, setError] = useState<string | undefined>()

    useEffect(() => {
        
        window.Main.on("solution-selected", (directory: string) => {
            setSolutionDir(directory)
            setCompiled(undefined)
        })

        window.Main.on("compiled-solution", (data: SolvedType) => {
            setCompiled(data)
        })
    }, [])

    return (
        <SolutionContext.Provider
            value={{
                solutionDir,
                setSolutionDir,

                compiled,
                setCompiled,

                error,
                setError
            }}
        >
            {children}
        </SolutionContext.Provider>
    );
};

export const useSolutionContext = () => {
    return useContext(SolutionContext);
};
