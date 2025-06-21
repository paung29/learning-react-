import React from "react";
import MemberListProvider from "./member-list-provider.tsx";
import EditMemberProvider from "./edit-member-provider.tsx";
import MemberIdProvider from "./member-id-provider.tsx";

export default function MemberProvider({ children }: { children: React.ReactNode }) {
    return (
        <MemberListProvider>
            <EditMemberProvider>
                <MemberIdProvider>
                    {children}
                </MemberIdProvider>
            </EditMemberProvider>
        </MemberListProvider>
    )
}