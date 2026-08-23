import { useEffect, useState } from "react";
import { getProductById } from "../Data/products";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../App.css"
import { useCart } from "../context/CartContext";
export default function Products()
{
     const{addToCart,cartItems}=useCart();
    const { id } = useParams();
    const [product,setProduct]=useState(null);
    const navigate=useNavigate();
    useEffect(()=>{
        const foundproduct=getProductById(id);
        if (!foundproduct) {
            navigate("/");
            return;
        }
        setProduct(foundproduct)
    },[id])
      
    if(!product)
    {
        return <h1>Loading...</h1>
    }
      const productc=cartItems.find(i=>i.id===product.id);
        const label=productc?`(${productc.quantity})`:"";
     
    return(
                <div className="page">
                    <div className="container">

                 <div className="product-detail">
                <img className="product-detail-image" src={product.image} alt={product.name} />
                <div className="product-detail-content">
               <h1 className="product-detail-name">{product.name}</h1>
                <p className="product-detail-price">${product.price}</p>
                <p className="product-detail-description">
                    {product.description}
                </p>
                </div>
                <Link className="btn btn-secondary" to={"/"}> Back </Link>
                <button className="btn btn-primary" onClick={()=>addToCart(product.id)} >Add to Cart</button>
                                   Add To Cart {label}

            </div>
         </div>

        </div>
    )

}