import { useForm } from "react-hook-form"
import type { MemberEditForm } from "../../model/input/member-edit-form"
import { useNavigate, useSearchParams } from "react-router"
import Page from "../../ui/page"
import { useEffect } from "react"
import { findMemberEditForm } from "../../model/client/member-client"

export default function MemberEdit(){

    const {register, handleSubmit, reset} = useForm<MemberEditForm>()

    const [queryParams] = useSearchParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function load(id : string) {
            const result = await findMemberEditForm(id)
            reset(result)
        }
    })

    return(
        <>
            <Page title="Member Edit" icon="bi-pencil">
                <div></div>
            </Page>
        </>
    )
}