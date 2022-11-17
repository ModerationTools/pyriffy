import React, { createContext, useContext, useEffect, useState } from "react";
import CaseType from "../../@types/CaseType";

type ICaseContext = {
    currentCase: CaseType

    setCurrentCase: (_case: CaseType) => void
    clearCase: () => void

    read: boolean
    setRead: (value: boolean ) => void
}

export const CaseContext = createContext({} as ICaseContext);

export const CaseProvider: React.FC = ({ children }) => {
    const defaultCase = {
        total: -1,
        name: "-1",
        inputs: [],
        outputs: [],
        error: ""
    }

    
    const [currentCase, setCurrentCase] = useState<CaseType>(defaultCase);
    const [read, setRead] = useState<boolean>(false);

    function clearCase() {
        setCurrentCase(defaultCase)
        setRead(false)
    }


    useEffect(() => {
        window.Main.on("read-case", (data: CaseType) => {
            if (!data.error) {
                setCurrentCase(data)
                setRead(true)
            }
        })
    }, [])


    return (
        <CaseContext.Provider
            value={{
                currentCase,
                setCurrentCase,
                read,
                setRead,
                clearCase
            }}
        >
            {children}
        </CaseContext.Provider>
    );
};

export const useCaseContext = () => {
    return useContext(CaseContext);
};
