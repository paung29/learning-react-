import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignInSchema, type SignInForm } from "~/lib/form-schema"
import AppPageTitle from "~/components/custom/app-page-title"
import { DoorOpen, Send, UserPlus } from "lucide-react"
import FormsInput from "~/components/custom/form-inputs"
import { Button } from "~/components/ui/button"
import { Link } from "react-router"

export default function Signin() {

    const form = useForm<SignInForm>({
        resolver : zodResolver(SignInSchema),
        defaultValues : {
            username : '',
            password : ''
        }
    })

    const signInAction = (form : SignInForm) => {
        console.log(form)
    }

    return(
        <>
            <header>
                <AppPageTitle title="Sign In"  icon={<DoorOpen />} />
                <p>Welcome to MY SHOP</p>
            </header>

            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(signInAction)}>
                    <FormsInput control={form.control} path="username" label="Login Id" className="mb-3"/>
                    <FormsInput control={form.control} path="password" label="Password" className="mb-3" type="password"/>

                    <div>
                        <Button asChild>
                            <Link to='/signup'>
                                <UserPlus /> Sign Up
                            </Link>
                        </Button>

                        <Button type="submit" className="ms-2">
                            <Send /> Sign In
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}