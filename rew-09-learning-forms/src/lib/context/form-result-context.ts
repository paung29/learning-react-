import { createContext, useContext } from "react"

type FormResultContextType = {
    result ?: string
    setResult : (result ?: string) => void
}

const FormResultContext = createContext<FormResultContextType | undefined>(undefined)

const useFormResult = () => {
    const context = useContext(FormResultContext)

    if(!context){
        throw Error("Invalid usage of form result context")
    }

    return context
}

export {
    FormResultContext,
    useFormResult
}