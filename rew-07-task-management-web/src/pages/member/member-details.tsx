import { Link, useParams } from "react-router";
import Page from "../../ui/page";

export default function MemberDetails(){

    const params = useParams()

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