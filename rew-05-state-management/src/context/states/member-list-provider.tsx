import React, {useState} from "react";
import type {Member} from "../../pages/reducer/member-domain.ts";
import {MemberListContext} from "./member-list-context.ts";

export default function MemberListProvider({ children }: { children: React.ReactNode }) {
    const state = useState<Member[]>([])
    return(
        <MemberListContext value={state}>
            {children}
        </MemberListContext>
    )
}