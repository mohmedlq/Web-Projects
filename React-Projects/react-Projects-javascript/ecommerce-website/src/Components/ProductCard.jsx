import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
export default function ProductCard({product})
{
    const{addToCart,cartItems}=useCart();
    const productc=cartItems.find(i=>i.id===product.id);
    const label=productc?`(${productc.quantity})`:"";
    return(
       
                <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-card-image" />
                <div className="product-card-content">
                    <h2 className="product-card-name">{product.name}</h2>
                    <span className="product-card-price">${product.price}</span>
                    <div className="product-card-actions">
                        <Link className="btn btn-secondary" to={`/products/${product.id}`}>View Details</Link>
                        <button className="btn btn-primary" onClick={()=>addToCart(product.id)}>add to cart </button>
                    Add To Cart {label}
                    </div>
                </div>
            </div>
    )
}