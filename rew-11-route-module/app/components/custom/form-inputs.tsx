import {type Control, type FieldValues, type Path} from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

type FormsInputType<T extends FieldValues> = {
    control : Control<T>
    path : Path<T>
    label : string
    className ?: string
    type ?: React.HTMLInputTypeAttribute
    placeholder ?: string
}


export default function FormsInput<T extends FieldValues>({control, path, label, className, type, placeholder} : FormsInputType<T>) {
    return(
        <FormField control={control} name={path} render={({field}) => 
            <FormItem className={className}>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Input {...field} type={type} placeholder={placeholder || `Enter ${label}`}/>
                </FormControl>
                <FormMessage />
            </FormItem>
        }>
        </FormField>

    )
}