import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Card, Form, Input } from "antd"
import { Controller, useForm } from "react-hook-form"
import { Outlet, useNavigate } from "react-router"
import z from "zod"


const FormSchema = z.object({
    id : z.string().nonempty()
})

type FormType = z.infer<typeof FormSchema>


export default function UsingPathVariable () {

    const navigate = useNavigate()

    const {handleSubmit, control, formState : {errors}} = useForm<FormType>({
        resolver : zodResolver(FormSchema),
        defaultValues : {
            id : ''
        }
    })

    const onSubmit = (form : FormType) => {
        navigate(`group/path-variable/${form.id}`)
    }


    return(
        <>
            <h1 className="text-2xl mb-4">Using Path Variable</h1>

            <section className="flex gap-8">

                <section className="flex-1">
                    <Card title="Change Path Value">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <Form.Item label="Define Path Value">
                                    <Controller control={control} name="id" render={({field}) => 
                                        <Input {...field} placeholder="Enter Path Value"/>
                                    }/>
                                </Form.Item>
                                {errors.id && <div className="text-red-500">Please enter path value.</div>}
                            </div>

                            <Button htmlType="submit">Send</Button>
                        </form>
                    </Card>

                </section>

                <section className="flex-1">
                    <Outlet />
                </section>
            </section>
        </>
    )
}