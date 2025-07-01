import { useForm } from "react-hook-form"
import type { MemberEditForm } from "../../model/input/member-edit-form"
import { useNavigate, useSearchParams } from "react-router"

export default function MemberEdit(){

    const {register, handleSubmit, reset} = useForm<MemberEditForm>()

    const [queryParams] = useSearchParams()
    const navigate = useNavigate()

    return(
        <>
        </>
    )
}