import React, { createContext, useState } from "react";

export const CompletoContext = createContext();

export function completoProvider({children}){
    const [tarefaCompleta, setTarefaCompleta] = useState("pendente");

    const alteraTarefa = () => {
        setTarefaCompleta((estadoTarefa) => (estadoTarefa === "pendente" ? "pendente" : "concluida"))
    }
    return (
        <CompletoContext.Provider value={{tarefaCompleta, alteraTarefa }}>
            {children}
        </CompletoContext.Provider>
    )
};

