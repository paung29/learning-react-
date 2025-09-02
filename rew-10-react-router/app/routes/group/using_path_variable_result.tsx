import { Card } from "antd";
import type { Route } from "../+types/home";

export default function ResultView({params} : {params : Route.ComponentProps}) {
    return(
        <Card title="Path Varaible Result">
            {/* <p>Value of ID is : {params.id}</p> */}
        </Card>
    )
}