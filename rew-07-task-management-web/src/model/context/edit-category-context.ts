import { createContext, useContext } from "react"

type EditCategory = {id : unknown, name : string}

type EditCategoryType = [EditCategory | undefined, (data : EditCategory | undefined) => void]

const EditCategoryContext = createContext<EditCategoryType | undefined>(undefined)

const useEditCategory = () => {
    const context = useContext(EditCategoryContext)

    if(!context){
        throw new Error("Invalid usage of Edit Category Context")
    }

    return context
}

export {
    EditCategoryContext,
    useEditCategory
}

export type {
    EditCategory
}