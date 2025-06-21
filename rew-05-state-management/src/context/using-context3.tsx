import MemberProvider from "./states/member-provider.tsx";
import {useEditMemberSetter} from "./states/edit-member-context.ts";
import MemberEditForm from "../ui/member/member-edit.tsx";
import Card from "../ui/card/card-component.tsx";
import MemberList from "../ui/member/member-list.tsx";
import {Default_Member} from "../pages/reducer/domain.ts";

export default function UsingContext3() {
    return (
        <MemberProvider>
            <View/>
        </MemberProvider>
    )
}

function View(){
    const setEditMember = useEditMemberSetter()
    return(
        <>
            <div className="d-flex justify-content-between">
                <h3>Context with useState</h3>
                <button onClick={() => setEditMember({...Default_Member})} className="btn btn-primary">
                    <i className="bi-plus"></i> Add Member
                </button>
            </div>

            <div className="row mt-3">
                <div className="col-4">
                    <Card>
                        <MemberEditForm />
                    </Card>
                </div>
                <div className="col">
                    <Card>
                        <MemberList />
                    </Card>
                </div>
            </div>

        </>
    )
}