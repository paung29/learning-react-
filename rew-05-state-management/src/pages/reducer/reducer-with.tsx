import { useReducer, useState } from "react"

import Card from "../../ui/card/card-component"
import MemberEditForm from "./member-edit"
import MemberList from "./member-list"
import { memberReducer } from "./member-reducer"
import type { Member } from "./member-domain"
import { Default_Member } from "./domain"

export default function WithReducer(){

    const [id, setId] = useState(0)
    const [members, dispatch] = useReducer(memberReducer , [])
    const [target, setTarget] = useState<Member>(Default_Member)
    

    function editMember(id : number) {
        const member = members.find(a => a.id == id)
        if(member){
            setTarget({...member})
        }
    }

    function clearForm(){
        setTarget({...Default_Member})
    }

    function saveMember(member : Member){
        if(member.id == 0){
            setId(id + 1)
            dispatch({type : 'create' , member : {...member, id : id + 1}})
        }else {
           dispatch({type : 'update', member})
        }

        setTarget({...Default_Member})
    }


    return (
        <>
            <div className="d-flex">
                <h3>With Reducer</h3>
            </div>

            <div className="row">
                <div className="col-4">
                    <Card>
                        <MemberEditForm member={target} saveMember={saveMember} clearForm={clearForm}/>
                    </Card>
                </div>

                <div className="col">
                    <Card>
                        <MemberList members={members} editMember={editMember} deleteMember={id => dispatch({type : 'delete', id : id})}/>
                    </Card>
                </div>
            </div>
        </>
    )
}