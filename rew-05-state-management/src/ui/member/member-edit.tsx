import type {Member} from "../../pages/reducer/member-domain.ts";
import {useEditMember, useEditMemberSetter} from "../../context/states/edit-member-context.ts";
import {useAddMemberAction, useUpdateMemberAction} from "../../context/states/member-list-context.ts";
import {useMemberIdContext} from "../../context/states/member-id-context.ts";
import {Default_Member} from "../../pages/reducer/domain.ts";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import FormGroup from "../form/form-group.tsx";

export default function MemberEditForm(){

    const member:Member = useEditMember()
    const setMember = useEditMemberSetter()
    const updateMember = useUpdateMemberAction()
    const addNewMember = useAddMemberAction()
    const {id, setId} = useMemberIdContext()

    function clearForm (){
        setMember({...Default_Member})
    }

    function saveMember(member : Member){
        console.log(member)
        if(member.id){
            updateMember(member)
        }else {
            member.id = id + 1
            addNewMember(member)
            setId(member.id)
        }
        clearForm()
    }

    const {
        register,
        handleSubmit,
        reset,
        formState : {errors}
    } = useForm<Member>({values:member})

    useEffect(()=>{
        reset(member)
    }, [member, reset])

    return(
        <section>
            <h4>{member.id ? "Edit" : "Add New"} Member</h4>

            <form onSubmit={handleSubmit(saveMember)} className="form">
                <FormGroup label="Name">
                    <input className="form-control" placeholder="Enter name" {...register('name', {required : true})} />
                    {errors.name && <span className="text-secondary">Please Enter Name</span>}
                </FormGroup>

                <FormGroup label="Phone">
                    <input className="form-control" placeholder="Enter Phone" {...register('phone', {required : true})} />
                    {errors.phone && <span className="text-secondary">Please Enter Phone Number</span> }
                </FormGroup>

                <FormGroup label="Email">
                    <input className="form-control" placeholder="Enter Email" {...register('email', {required : true})} />
                    {errors.phone && <span className="text-secondary">Please Enter Email Address</span> }
                </FormGroup>

                <div>
                    <button className="btn btn-primary me-2">Save Member</button>
                    <button type="button" className="btn btn-info" onClick={clearForm}>Clear Form</button>
                </div>
            </form>
        </section>
    )
}