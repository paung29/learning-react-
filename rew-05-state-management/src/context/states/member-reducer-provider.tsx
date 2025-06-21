import type React from "react";
import { useImmerReducer } from "use-immer";
import type { Member } from "../../pages/reducer/member-domain";
import type { MemberAction } from "../../pages/reducer/member-reducer";
import { memberReducer } from "../../pages/reducer/member-reducer-immer";
import { MemberReducerContext } from "./member-reducer-context";
import EditMemberProvider from "./edit-member-provider";
import MemberIdProvider from "./member-id-provider";

export  function MemberReducerProvider({children} : {children : React.ReactNode}){

    const context = useImmerReducer<Member[], MemberAction>(memberReducer, [])

    return(
        <MemberReducerContext value={context}>
            <EditMemberProvider>
                <MemberIdProvider>
                    {children}
                </MemberIdProvider>
            </EditMemberProvider>
        </MemberReducerContext>
    )
}