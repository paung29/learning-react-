import { useState } from "react"

import Card from "../../ui/card/card-component"
import MemberEditForm from "./member-edit"
import MemberList from "./member-list"
import type { Member } from "./member-domain"
import { Default_Member } from "./domain"

export default function WithoutReducer(){

    const [id, setId] = useState(0)
    const [members, setMembers] = useState<Member[]>([])
    const [target, setTarget] = useState<Member>(Default_Member)
    
    function addMember(member : Member) {
        setMembers([...members.map(a => ({...a})) , member])
    }

    function updateMember(member : Member){
        const index = members.findIndex(a => a.id == member.id)
        setMembers([...members.splice(0, index).map(a => ({...a})), {...member}, ...members.splice(index + 1)])
    }

    function deleteMember(id : number) {
        setMembers([...members.filter(a => a.id != id).map(a => ({...a}))])
    }

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
            addMember({...member, id : id+1})
        }else {
            updateMember(member)
        }

        setTarget({...Default_Member})
    }


    return (
        <>
            <div className="d-flex">
                <h3>Without Reducer</h3>
            </div>

            <div className="row">
                <div className="col-4">
                    <Card>
                        <MemberEditForm member={target} saveMember={saveMember} clearForm={clearForm}/>
                    </Card>
                </div>

                <div className="col">
                    <Card>
                        <MemberList members={members} editMember={editMember} deleteMember={deleteMember}/>
                    </Card>
                </div>
            </div>
        </>
    )
}