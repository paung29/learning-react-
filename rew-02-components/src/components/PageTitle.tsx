import { Home } from "lucide-react";

export function PageTitle({title, icon}:{title?:string, icon?:React.ReactNode}){
    return (
        <h3 className="d-flex align-items-center">
            {icon || <Home/>}
            <span className="d-inline-block ps-2">{title ? title : 'Page Title'}</span>
        </h3>
    )
}