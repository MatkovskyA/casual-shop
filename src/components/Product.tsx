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
      <div className="border py-2 px-4 rounded w-2/5 flex jc-center items-center w-1/2">
        <div className="wrapper flex gap-2 h-auto min-h-full">
          <div className="product-img w-1/2 p4">
            <img src={product.image} alt={product.title} className=""/>
          </div>
          <div className="product-desc w-1/2 p4 bg-green-100 p-2">
            <h2>{product.title}</h2>
            <span>{product.category}</span>
            <span className="block">
              {product.price}
            </span>
            <button className={btnClasses.join(' ')} onClick={() =>setDetails(!details)}>{details ? "Hide details" : "Show details"}</button>
            {details && <p className="break-words">{product.description}</p>}
            <span className="block">Рейтинг:{product.rating.rate} / 5 (Оценок: {product.rating.count})</span>
          </div>
        </div>
      </div>
  )
}

export default Product;