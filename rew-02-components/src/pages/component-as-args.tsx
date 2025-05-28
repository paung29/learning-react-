import { Atom, LogIn } from "lucide-react";
import { PageTitle } from "../components/PageTitle";

export default function ComponentsAsArgs(){
    return (
        <section>
            <PageTitle title="Components As Args" icon={<Atom/>}/>

            <section className="mt-4 w-50">
                <Card title="Loin Form" >
                    <div className="mt-4 mb-3">
                        <label className="form-label">Login Id</label>
                        <input type="text" className="form-control" placeholder="Enter Login Id" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control" />
                    </div>

                    <button className="btn btn-outline-primary">
                        <LogIn/> Login
                    </button>
                </Card>
            </section>

        </section>
    )
}

function Card({title, children} : {title:string, children:React.ReactNode}){
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {children}
            </div>
        </div>
    )
}