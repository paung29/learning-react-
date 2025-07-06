import { useForm } from "react-hook-form"
import type { ProjectSearch } from "../../model/input/project-search"
import { useState } from "react"
import type { ProjectSearchResult } from "../../model/output/project-list-item"
import { searchProject } from "../../model/client/project-client"

export default function ProjectListComponent(){

    const {register, handleSubmit} = useForm<ProjectSearch>()
    const [result, setResult] = useState<ProjectSearchResult | undefined>(undefined)

    async function search(form:ProjectSearch) {
        const respone = await searchProject(form)
        setResult(respone)
    }

    return (
        <>
        </>
    )
}

function ProjectSearchResult({result} : {result ?: ProjectSearchResult})