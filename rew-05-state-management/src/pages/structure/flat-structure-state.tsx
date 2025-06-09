import { useState } from "react"
import { flatTravelPlan, type FlatPlan } from "./flat-structure"

export default function FlatStructure (){

    const [flatPlan , setFlatPlan] = useState<Record<number, FlatPlan>>(flatTravelPlan)
    const basePlan = flatPlan[0]
    const [selectedPlan, setSelectedPlan] = useState<number>(1)

    const handleVisit = (placeId : number, parendId : number) => {
        const parent = flatPlan[parendId]
        const nextParent : FlatPlan = {...parent, childIds : parent.childIds.filter(id => id != placeId)}
        flatPlan[parendId] = nextParent
        setFlatPlan({...flatPlan})
    }

    return (
        <>
            <h3>Flat State</h3>
        </>
    )
}

function PlaceComponent ({planId, parentId, planRecord, selectetId, onVisit, onClick} : {
    planId : number,
    parentId : number,
    planRecord : Record<number, FlatPlan>,
    selectetId : number,
    onVisit : (placeId : number, parendId : number) => void,
    onClick : ()=> void})

{

    const plan = planRecord[planId]
    const show = (planId == selectetId || hasChildForShow(planRecord, planId, selectetId))



    return(
        <div className="accordion-item">
            <h5 className="accordion-header">
                <button>{plan.title}</button>
            </h5>

            <div className="">
                <div className="accordion-body">
                    
                </div>
            </div>
        </div>
    )
}


function hasChildForShow(planRecord : Record<number, FlatPlan> , planId : number, selectetId : number){

    const plan = planRecord[planId]

    if(plan.childIds.length > 0){
        for(const childId of plan.childIds){
            if(childId == selectetId){
                return true
            }

            const result = hasChildForShow(planRecord, childId, selectetId)

            if(result){
                return true
            }
        }
    }

    return false


}