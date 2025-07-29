import type React from "react";
import { Label } from "../ui/label";

export default function FormGroup({label, children, className} : {label : string, children ?: React.ReactNode, className ?: string}){
    return (
        <div className={className}>
            <Label className="mb-2 block">{label}</Label>
            {children}
        </div>
    )
}