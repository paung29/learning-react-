import type { Member } from "./domain"

export type MemberAction = {
    type : 'create' | 'update' | 'delete'
    member ?: Member
    id ?: number
}

export function memberReducer(state : Member[] , action : MemberAction){

    switch(action.type){
        case 'create' : 
        return action.member ? [...state, action.member] : [...state]
        case 'delete' :
        return action.id ? [...state.filter(a => a.id !== action.id)] : [...state]
        case 'update' :
            if(action.member){
                const index = state.findIndex(a => a.id == action.member?.id)
                state[index] = action.member
            }
            return [...state.map(a => ({...a}))]
    }

}