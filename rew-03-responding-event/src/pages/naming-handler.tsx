import PageTitle from "../ui/page-title";

export default function NamingEventHandler(){
    return(
        <>
            <PageTitle title="Naming Event Handler" />

            <ToolsBar 
                downloadHandler={() => alert('download')}
                palyHandler={() => alert('play')}
                >
            </ToolsBar>
        </>
    )
}

function ToolsBar({palyHandler, downloadHandler} : {palyHandler : VoidFunction, downloadHandler : VoidFunction}){
    return (
        <div className="card" onClick={() => alert('clicking tool bar')}>
            <div className="card-body">
                <Button name="Play Movie" className="me-2" onClick={palyHandler} />
                <Button name="Download Movie" className="me-2" onClick={downloadHandler} />

            </div>
        </div>
    )
}

function Button({name, onClick, className}: {name:string, onClick:VoidFunction, className?:string}) {
    return (
        <button onClick={e => {
            e.stopPropagation()
            onClick()
        }} className={`btn btn-outline-primary ${className}`}>
            {name}
        </button>
    )
}