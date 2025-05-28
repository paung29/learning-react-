import PageTitle from "../ui/page-title";

export default function HandlingEvent(){
    return (
        <>
            <PageTitle title="Handling Event"/>

            <section>
                <Button/>

            </section>
            
        </>
    )
}

function Button(){

    const clickButton = () => alert('Hi')

    return(
        <button onClick={clickButton} className="btn btn-outline-primary">Click Here</button>
    )
}