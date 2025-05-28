import { ArrowRight } from "lucide-react";
import { PageTitle } from "../components/PageTitle";
import { useState } from "react";

export default function(){

    const [color, setColor] = useState<'blue' | 'red' | 'black'>('black')

    const setBlue = () => setColor('blue')
    const setRed = () => setColor('red')

    return (
        <>
            <PageTitle title="Passing Handler" icon={<ArrowRight/>}/>

            <section>

                <div className="mb-4" style={{width: 400, height: 150, backgroundColor : color}}></div>

                <Button name="Blue" btnClass="btn-primary me-2" onClick={setBlue} />
                <Button name="Red" btnClass="btn-danger" onClick={setRed} />

            </section>
        </>
    )
}

function Button({btnClass, name, onClick} : {btnClass:string, name:string, onClick:VoidFunction}){
    return (
        <button onClick={onClick} className={`btn ${btnClass}`}>{name}</button>
    )
}