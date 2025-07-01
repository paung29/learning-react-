import { Link } from "react-router";
import { FormGroup } from "../../ui/form-group";
import Page from "../../ui/page";
import Pagination from "../../ui/pagination";
import { useForm } from "react-hook-form";
import type { MemberSearch } from "../../model/input/member-search";
import { useState } from "react";
import type { MemberListItem, MemberSearchResult } from "../../model/output/member-list-item";
import { searchMember } from "../../model/client/member-client";

export default function MemberList(){

    const {register, handleSubmit} = useForm<MemberSearch>()
    const [result, setResult] = useState<MemberSearchResult | undefined>(undefined)

    async function search(form : MemberSearch){
        const searchResult =  await searchMember(form)
        setResult(searchResult)
    }

    return(
        <>
         <Page title="Member Management" icon="bi-people">
            <form action="" className="row mb-3">
                <FormGroup label="Position" className="col-auto">
                    <select className="form-select">
                        <option>All position</option>
                    </select>
                </FormGroup>

                <FormGroup label="Name"  className="col-auto">
                    <input type="text" className="form-control" placeholder="Search Name" />
                </FormGroup>

                <FormGroup label="Entry Form"  className="col-auto">
                    <input type="date" className="form-control" placeholder="Search Project Name" />
                </FormGroup>

                <FormGroup label="Entry To"  className="col-auto">
                    <input type="date" className="form-control" placeholder="Search Project Name" />
                </FormGroup>

                <div className="col btn-wrapper">
                    <button type="submit" className="btn btn-dark me-2">
                        <i className="bi-search"></i> Search
                    </button>

                    <Link to="" type="button" className="btn btn-outline-dark">
                        <i className="bi-plus"></i>Add New Member
                    </Link>
                </div>
            </form>

            <Pagination />
         </Page>
        </>
    )
}

function MemberTable({result} : {result : MemberSearchResult}){
    const {list, pager} = result

    return(
        <>
            <table className="table table-bordered table-striped table-hover mt-3">
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Entry At</th>
                        <th className="text-end">Projects</th>
                        <th className="text-end">Tasks</th>
                        <th className="text-end">TODO</th>
                        <th className="text-end">Behind</th>
                        <th className="text-end">Complete</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>

            <Pagination pager={pager}/>
        </>
    )
}

function MemberRow({member} : {member : MemberListItem}){
    return (
        <tr>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.position}</td>
            <td>{member.entryAt}</td>
            <td  className="text-end">{member.projects}</td>
            <td  className="text-end">{member.created + member.onSchedule}</td>
            <td  className="text-end">{member.behind}</td>
            <td  className="text-end">{member.completed}</td>
            <td  className="text-end">
                <a href="#" onClick={e => {
                    e.preventDefault()
                    
                }} className="icon-link">
                    <i className="bi-send"></i>
                    <i className="bi-arrow-right"></i>
                </a>
            </td>
        </tr>
    )
}