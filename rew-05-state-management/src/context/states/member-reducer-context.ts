import type React from "react";


import { createContext, useContext } from "react";
import type { Member } from "../../pages/reducer/member-domain";
import type { MemberAction } from "../../pages/reducer/member-reducer";

type memberReducerContextType = [Member[], React.Dispatch<MemberAction>]

const MemberReducerContext = createContext<memberReducerContextType | undefined>(undefined)

function useMemberReducerContext() {
    const context = useContext(MemberReducerContext)

    if(!context){
        throw Error("Inavalid usage ")
    }
    return context
}

function useReducerMembers(){
    return useMemberReducerContext()[0]
}

function useMemberDispatcher(){
    return useMemberReducerContext()[1]
}

export {
    MemberReducerContext,
    useReducerMembers,
    useMemberDispatcher
}