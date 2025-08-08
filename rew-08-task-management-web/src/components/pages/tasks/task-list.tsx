import { searchTasks } from "@/lib/client/task-client";
import type { TaskListItem } from "@/lib/model/output/task-list-item";
import { TaskSearchSchema, type TaskSearch } from "@/lib/model/schema/task-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

export default function TaskList(){

    const [list, setList] = useState<TaskListItem[]>([])

    async function search(form:TaskSearch) {
        const response = await searchTasks(form)
        setList(response)
    }


    return (
       <>
            <SearchForm search={search}/>
       </>
    )
}

function SearchForm({search} : {search : (form : TaskSearch) => void}){

    const {id} = useParams()
    const {register, handleSubmit, resetField} = useForm<TaskSearch>({resolver : zodResolver(TaskSearchSchema)})
    const formRef = useRef<HTMLFormElement | null>(null)

    useEffect(() => {
        if(id){
            resetField('projectId', {defaultValue : id})
            formRef.current?.requestSubmit
        }
    },[id, resetField])

    return(
        <></>
    )
}