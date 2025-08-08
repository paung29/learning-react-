import ButtonWrapper from "@/components/custom/button-wrapper";
import FormGroup from "@/components/custom/form-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { searchTasks } from "@/lib/client/task-client";
import type { TaskListItem } from "@/lib/model/output/task-list-item";
import { TaskSearchSchema, type TaskSearch } from "@/lib/model/schema/task-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Plus, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router";

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
        <form ref={formRef} onSubmit={handleSubmit(search)} className="flex gap-2">
            <input type="hidden" {...register('projectId')} />

            <FormGroup label="Start From">
                    <Input {...register('startFrom')} type="date"/>
            </FormGroup>

            <FormGroup label="Start To">
                    <Input {...register('startTo')} type="date"/>
            </FormGroup>

            <FormGroup label="Keyword">
                    <Input {...register('keyword')} placeholder="Search Keyword"/>
            </FormGroup>

            <ButtonWrapper>
                <Button type="submit">
                    <Search /> Search
                </Button>

                <Button asChild className="ms-1">
                    <Link to={`/project/${id}/task/edit`}>
                        <Plus /> Create Task
                    </Link>
                </Button>
            </ButtonWrapper>
        </form>
    )
}

function ResultTable({list} : {list : TaskListItem[]}){
    const {id} = useParams()

    return(
        <Table >
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Assignee</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Name</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {list.map(item => 
                    <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.assignee}</TableCell>
                        <TableCell>{item.dueDate}</TableCell>
                        <TableCell>{item.startDate}</TableCell>
                        <TableCell>{item.endDate}</TableCell>
                        <TableCell>
                            <Link to={`/project/${id}/task/${item.id}`}>
                                <ArrowRight />
                            </Link>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}