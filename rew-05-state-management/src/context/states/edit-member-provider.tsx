import React, {useState} from "react";
import {Default_Member} from "../../pages/reducer/domain.ts";
import {EditMemberContext} from "./edit-member-context.ts";

export default function EditMemberProvider({children} : {children: React.ReactNode}) {

    const [member, setMember] = useState(Default_Member)

    return(
        <EditMemberContext value={{member : member, setMember : setMember}} >
            {children}
        </EditMemberContext>
    )
}