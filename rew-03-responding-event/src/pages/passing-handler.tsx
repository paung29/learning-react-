import PageTitle from "../ui/page-title";

export default function PassingHandler(){

    const changeBack = (color: 'red' | 'blue') => {
        document.getElementById('targetDiv')!.style.backgroundColor = color
    }

    const changeBlue = () => changeBack('blue')

    const changeRed = () => changeBack('red')

    return(
        <>
            <PageTitle title="Passing Handler as Properties" />

            <div id="targetDiv" style={{width : 400, height : 150, backgroundColor : 'black', marginBottom : 16}}></div>

            <Button name="Button 1" onClick={() => alert('pressing button 1')}  className="me-2" />
            <Button name="Button 2" onClick={changeBlue} className="me-2" />
            <Button name="Button 3" onClick={changeRed} className="me-2" />
        </>
    )
}

function Button({name, onClick, className}: {name:string, onClick:VoidFunction, className?:string}) {
    return (
        <button onClick={onClick} className={`btn btn-outline-primary ${className}`}>
            {name}
        </button>
    )
}