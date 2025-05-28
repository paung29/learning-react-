import type { ProductDto } from "../dataset/product";

export function Product({dto} : {dto:ProductDto}){
    return (
        <div className="card">
            {/* image */}
            <img className="product-image card-img-top" src={`/product/${dto.image}`} alt="Product Image" />
            
            {/* product name */}
            <div className="card-body">
                <h5 className="card-title">{dto.name}</h5>
            
                <div className="d-flex justify-content-between ">
                    {/* category */}
                    <span>{dto.category}</span>
                    {/* price */}
                    <span>{dto.price.toLocaleString()} MMK</span>
                </div>
            </div>
        </div>
    )
}