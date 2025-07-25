import type React from "react";
import { useState } from "react";
import { ModalStateContext } from "../context/modal-state-context";

export default function ModalStateContextProvider({children} : {children : React.ReactNode}){

    const modalState = useState<boolean>(false)

    return(
        <ModalStateContext.Provider value={modalState}>
            {children}
        </ModalStateContext.Provider>
    )

}