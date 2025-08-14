import { createContext, useContext } from "react"

type AppTitleContextType = {
    title : string
    setTitle : (title : string) => void
}

const AppTitleContext = createContext<AppTitleContextType | undefined>(undefined)

const useAppTitle = () => {
    const context = useContext(AppTitleContext)

    if(!context){
        throw Error("Invalid Usage of App Title Context")
    }

    return context
}

export {
    AppTitleContext,
    useAppTitle
}