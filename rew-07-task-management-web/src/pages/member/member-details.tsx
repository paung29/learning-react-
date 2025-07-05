import { Link, useParams } from "react-router";
import Page from "../../ui/page";
import { useEffect, useState } from "react";
import type { MemberDetails } from "../../model/output/member-details";
import { findMemberById } from "../../model/client/member-client";
import Loading from "../../ui/loading";

export default function MemberDetailsComponent(){

    const params = useParams()
    const [details, setDetails] = useState<MemberDetails | undefined>()

    useEffect(()=> {
        const id = params.id
        async function load (){
            if(id){
                const response = await findMemberById(Number.parseInt(id))
                setDetails(response)
            }
        }

        load()
    }, [params])

    if(!details){
        return(
            <Loading/>
        )
    }

    const {projects, ...profile} = details

    return(
        <Page title="Member Details" icon="bi-people">
            <div>
                <Link to={`/member/edit?id=${params.id}`} className="btn btn-outline-dard">
                    Edit Member
                </Link>
            </div>
        </Page>
    )
}