import { useForm } from "react-hook-form"
import { useParams } from "react-router"
import type { CategorySearch } from "../../../model/input/category-search"
import { useEffect, useRef, useState } from "react"
import type { CategoryListItem } from "../../../model/output/category-list-item"
import { useModalStateContext } from "../../../model/context/modal-state-context"
import { searchCategory } from "../../../model/client/category-client"
import NoData from "../../../ui/no-data"
import { FormGroup } from "../../../ui/form-group"
import type { CategoryForm } from "../../../model/input/category-form"
import ModalDialog from "../../../ui/modal-dialog"
import ErrorMessage from "../../../ui/error-message"

export default function ProjectCateogryList(){
    return(
        <></>
    )
}

function CategoryList(){
    const params = useParams()
    const projectId = params.id

    const {register, reset, handleSubmit} = useForm<CategorySearch>()
    const [list, setList] = useState<CategoryListItem[]>([])

    const [_, setShowDialog] = useModalStateContext()

    useEffect(() => {
        if(projectId){
            reset({projectId : projectId})
        }
    }, [projectId, reset])

    async function search(form:CategorySearch) {
        const response = await searchCategory(form)
        setList(response)
    }

    return(
        <>
            <form onSubmit={handleSubmit(search)} className="row">
                <FormGroup label="Name" className="col-auto">
                    <input {...register('name')} type="text" className="form-control" placeholder="Search Name" />
                </FormGroup>

                <div className="col btn-wrapper">
                    <button type="submit" className="btn btn-dark">
                        <i className="bi-search"></i> Search
                    </button>

                    <button type="button" onClick={() => setShowDialog(true)} className="btn btn-outline-dark ms-2">
                        <i className="bi-plus"></i> Add New
                    </button>
                </div>
            </form>
        
            <section className="my-4">
            {list.length ? 
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th className="text-end">Pending</th>
                            <th className="text-end">Progress</th>
                            <th className="text-end">Behind</th>
                            <th className="text-end">Paused</th>
                            <th className="text-end">Finished</th>
                        </tr>
                    </thead>
                    <tbody>
                    {list.map(item => 
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td className="text-end">{item.pending}</td>
                            <td className="text-end">{item.progress}</td>
                            <td className="text-end">{item.behind}</td>
                            <td className="text-end">{item.paused}</td>
                            <td className="text-end">{item.finished}</td>
                        </tr>
                    )}    
                    </tbody>
                </table> : 
                <NoData dataName="Category" />
            }
            </section>
        </>
    )
}

function CategoryEditDialog(){

    const fromRef = useRef<HTMLFormElement | null>(null)
    const {register, handleSubmit, formState : {errors}} = useForm<CategoryForm>()
    const [showDialog, setShowDialog] = useModalStateContext()

    async function onSave(form : CategoryForm) {
        console.log(form)
        setShowDialog(false)
    }

    return(
        <ModalDialog title="Edit Category" show={showDialog} onHide={() => setShowDialog(false)} onSave={() => 
            fromRef.current?.submit()
        }>
            <form ref={fromRef} onSubmit={handleSubmit(onSave)} className="row">
                <FormGroup label="Name">
                    <input {...register('name', {required : true})} type="text" className="form-control" placeholder="Enter Category Name" />
                    {errors.name && <ErrorMessage message="Please enter category name." />}
                </FormGroup>
            </form>

        </ModalDialog>
    )
}