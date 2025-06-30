import { Link } from "react-router";
import { FormGroup } from "../../ui/form-group";
import Page from "../../ui/page";
import Pagination from "../../ui/pagination";
import { useForm } from "react-hook-form";
import type { MemberSearch } from "../../model/input/member-search";
import { useState } from "react";
import type { MemberSearchResult } from "../../model/output/member-list-item";

export default function MemberList(){

    const {register, handleSubmit} = useForm<MemberSearch>()
    const [result, setResult] = useState<MemberSearchResult | undefined>(undefined)

    function search(form : MemberSearch){
        const searchResult = searchMember
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