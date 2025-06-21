import { useForm } from "react-hook-form";
import FormGroup from "../../ui/form/form-group";

import { useEffect } from "react";
import type { Member } from "./member-domain";

export default function MemberEditForm ({member, saveMember, clearForm} : {member ?: Member, saveMember:(member : Member) => void, clearForm : VoidFunction}){


    const {
        register,
        handleSubmit,
        reset,
        formState : {errors}
    } = useForm<Member>({values : member})

    useEffect(() => {
        reset(member)
    },[member, reset])


    return(
        <section>
            <h4>{member ? "Edit" : "Add New"} Member</h4>

            <form onSubmit={handleSubmit(saveMember)}>
                <FormGroup label="Name" >
                    <input className="form-control" placeholder="Enter name" {...register('name', {required : true})}/>
                    {errors.name && <span className="text-secondary">Please Enter Name</span>}
                </FormGroup>

                <FormGroup label="Phone" >
                    <input className="form-control" placeholder="Enter phone" {...register('phone', {required : true})}/>
                    {errors.phone && <span className="text-secondary">Please Enter Phone</span>}
                </FormGroup>

                <FormGroup label="Email" >
                    <input className="form-control" placeholder="Enter email" {...register('email', {required : true})}/>
                    {errors.email && <span className="text-secondary">Please Enter Email</span>}
                </FormGroup>

                <div>
                    <button className="btn btn-primary me-2">Save Member </button>
                    <button type="button" className="btn btn-info" onClick={clearForm}>Clear Form</button>
                </div>

            </form>
        </section>
    )
}