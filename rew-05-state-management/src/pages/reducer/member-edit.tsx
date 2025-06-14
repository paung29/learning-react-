import { useForm } from "react-hook-form";
import FormGroup from "../../ui/form/form-group";
import type { Member } from "./domain";

export default function MemberEditForm ({member, saveMember, clearForm} : {member ?: Member, saveMember:(member : Member) => void, clearForm : VoidFunction}){


    const {
        register,
        handleSubmit,
        formState : {errors}
    } = useForm<Member>({values : {
        id : member?.id || 0 ,
        name : member?.name || "" ,
        phone : member?.phone || "",
        email : member?.email || ""
    }})


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

                <button className="btn btn-primary">
                    Save Member
                </button>

            </form>
        </section>
    )
}