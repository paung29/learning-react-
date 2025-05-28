import { useState } from "react"

export default function StateSpread(){

    const [user, setUser] = useState<User>({name: '', phone:'', email:''})

    const changeName = (event:React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, name : event.target.value})
    }
    const changePhone = (event:React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, phone : event.target.value})
    }
    const changeEmail = (event:React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, email : event.target.value})
    }


    return(
        <section>
            <h3>Spread Object State</h3>

            <div className="row">
                <div className="col">
                    <form>
                        <FormGroup label="Name">
                            <input onChange={changeName} type="text" className="form-control" placeholder="Enter Name" />
                        </FormGroup>
                        <FormGroup label="Phone">
                            <input onChange={changePhone} type="text" className="form-control" placeholder="Enter Phone" />
                        </FormGroup>
                        <FormGroup label="Email">
                            <input onChange={changeEmail} type="text" className="form-control" placeholder="Enter Email" />
                        </FormGroup>
                    </form>
                </div>
                <div className="col">
                    <form>
                        <FormGroup label="Name">
                            <span className="form-control">{user.name || 'No Name'}</span>
                        </FormGroup>
                        <FormGroup label="Phone">
                        <span className="form-control">{user.phone || 'No Phone'}</span>
                        </FormGroup>
                        <FormGroup label="Email">
                        <span className="form-control">{user.email || 'No Email'}</span>
                        </FormGroup>
                    </form>
                </div>
            </div>
        </section>
    )
}

type User = {
    name : string
    phone : string
    email : string
}

function FormGroup({label, children}:{label:string, children:React.ReactNode}){
    return(
        <div className="mb-3">
            <label className="form-label">{label}</label>
            {children}
        </div>
    )
}