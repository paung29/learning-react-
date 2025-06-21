import { useState } from "react"
import { useImmer, useImmerReducer } from "use-immer"

import { memberReducer, type MemberAction } from "./member-reducer"
import type { Member } from "./member-domain"
import { Default_Member } from "./domain"
import Card from "../../ui/card/card-component"
import MemberEditForm from "./member-edit"
import MemberList from "./member-list"

export default function ImmerWithReducer(){

    const [id, setId] = useState(0)
    const [members, dispatch] = useImmerReducer<Member[], MemberAction>(memberReducer, [])
    const [target, setTarget] = useState<Member>(Default_Member)

    function editMember(id : number){
        const member = members.find(a => a.id == id)
        if(member){
            setTarget({...member})
        }
    }

    function clearForm(){
        setTarget({...Default_Member})
    }

    function saveMember(member : Member){
        if(!member.id){
            setId(id + 1)
            dispatch({type : 'create', member : {...member, id : id+1}})
        }else{
            dispatch({type : 'update', member})
        }
        setTarget({...Default_Member})
    }

    return (
        <>
            <div className="d-flex mb-3 justify-content-between">
                <h3>Using Reducer With Immer</h3>
                <button onClick={clearForm} type="button" className="btn btn-primary">Add New Member</button>
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