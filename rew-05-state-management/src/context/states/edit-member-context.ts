import type {Member} from "../../pages/reducer/member-domain.ts";
import {createContext, useContext} from "react";

interface EditMemberContextType{
    member : Member
    setMember : (member : Member) => void
}

const EditMemberContext = createContext<EditMemberContextType | undefined>(undefined)

function useEditMemberContext(){
    const context = useContext(EditMemberContext)
    if(!context){
        throw new Error('useEditMemberContext must be used within context')
    }
    return context
}

function useEditMember(){
    return useEditMemberContext().member
}

function useEditMemberSetter(){
    return useEditMemberContext().setMember
}

export {
    EditMemberContext,
    useEditMember,
    useEditMemberSetter

}