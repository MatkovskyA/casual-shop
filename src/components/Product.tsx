import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct
}

function Product ({ product }: ProductProps) {
  const [details, setDetails] = useState(false)
  const btnBgClasses = details ? 'bg-yellow-400' : 'bg-blue-400';
  const btnClasses = ['py-2 px-4 border rounded', btnBgClasses]

  return (
    <div className="border py-2 px-4 rounded flex flex-wrap items-center">
      <div className="wrapper">
        <div className="product-img">
          <img src={product.image} alt={product.title} className="width=1/6"/>
        </div>
        <h2>{product.title}</h2>
        <span>{product.category}</span>
        <span className="block">
          {product.price}
        </span>
        <button className={btnClasses.join(' ')} onClick={() =>setDetails(!details)}>{details ? "Hide details" : "Show details"}</button>
        {details && <p>{product.description}</p>}
      </div>
    </div>
  )
}

export default Product;