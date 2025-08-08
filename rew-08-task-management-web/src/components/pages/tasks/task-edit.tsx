import { TaskEditSchema, type TaskEdit } from "@/lib/model/schema/task-schema";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { createTask } from "@/lib/client/task-client";
import FormGroup from "@/components/custom/form-group";
import { Input } from "@/components/ui/input";
import FormError from "@/components/custom/form-error";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TaskEdit(){

    const {id} = useParams()
    const {handleSubmit, register, resetField, formState : {errors}} = useForm<TaskEdit>({resolver : zodResolver(TaskEditSchema)})
    const navigate = useNavigate()

    useEffect(() => {
        if(id){
            resetField('projectId', {defaultValue : id})
        }
    }, [id, resetField])

    async function save(form:TaskEdit) {
        const response = await createTask(form)
        if(response.success){
            navigate(`/project/${id}`)
        }
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="hidden" {...register('projectId')} />

            <div className="grid grid-cols-2 gap-4 mb-4">
                <FormGroup label="Task Name">
                    <Input {...register('name')} placeholder="Enter task name"/>
                    {errors.name && <FormError message="Please enter task name"/>}
                </FormGroup>
                <FormGroup label="Assignee">
                    <Input {...register('assignee')} placeholder="Enter assignee"/>
                    {errors.assignee && <FormError message="Please enter assignee"/>}
                </FormGroup>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
                <FormGroup label="Due Date">
                    <Input {...register('dueDate')} type="date"/>
                    {errors.dueDate && <FormError message="Enter due date"/>}
                </FormGroup>
                <FormGroup label="Start Date">
                    <Input {...register('startDate')} type="date"/>
                </FormGroup>
                <FormGroup label="End Date">
                    <Input {...register('endDate')} type="date"/>
                </FormGroup>
            </div>

            <FormGroup label="Description" className="mb-4">
                    <Input {...register('description')} placeholder="Enter description"/>
            </FormGroup>

            <Button type="submit">
                <Save /> Save Task
            </Button>

        </form>
    )
}