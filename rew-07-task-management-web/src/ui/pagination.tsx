import type { Pager } from "../model/output/_common";

export default function Pagination({pager} : {pager ?: Pager}){

    if(!pager){
        return <></>
    }

    return(
        <nav className="row">
            <div className="col-auto">
                <div className="input-group">
                    <span className="input-group-text">Size</span>
                    <select className="form-select">
                        <option value="10">10</option>
                        <option  value="25">25</option>
                        <option  value="50">50</option>
                    </select>
                </div>
            </div>

            <div className="col-auto">
                <button className="btn btn-outline-dark" >
                    <i className="bi-arrow-bar-left"></i>
                </button>

                <button className="btn btn-outline-dark ms-1 pagination-link" >
                    1
                </button>

                <button className="btn btn-outline-dark ms-1" >
                    <i className="bi-arrow-bar-right"></i>
                </button>
            </div>

            <div className="col d-flex justify-content-end">

                 <div className="input-group me-2 pagination-info">
                    <span className="input-group-text">Pages</span>
                    <span className="form-control">40</span>
                 </div>

                 <div className="input-group me-2 pagination-info">
                    <span className="input-group-text">Total</span>
                    <span className="form-control">40</span>
                 </div>
            </div>
        </nav>
    )
}