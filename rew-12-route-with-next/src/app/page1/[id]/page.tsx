export default async function DetailsView({params} : {params : Promise<{id : string}>}) {

    const {id} = await params

    return(
        <>
            <h1>Details View : {id}</h1>
        </>
    )
}