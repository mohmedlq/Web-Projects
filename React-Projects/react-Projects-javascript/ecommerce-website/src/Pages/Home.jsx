import "../App.css"
import ProductCard from "../Components/ProductCard";
import {getProducts} from "../Data/products"
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function Home()
{
    const products=getProducts();
    const { user } =useAuth();

    return(
        <>
        <div className="page">
          

            <div className="container">
                    {user!==null ? (
                    <>
                      <div className="home-hero">
                  <h1 className="home-title">Welcome to Home hub</h1>
               <p className="home-subtitle">Discover amazing products at great prices</p>

                      </div>
                        <h2 className="page-title">Our Products</h2>
                        <div className="product-grid">
                            {products.map((product) => (
                                <ProductCard product={product} key={product.id} />
                            ))}
                        </div>
                    </>
                    ) : (
                    <div className="login-message" style={{ textAlign: "center", marginTop: "50px" }}>
                        <h2 className="page-title">Please login to view our products!</h2>
                        <p className="home-subtitle">You need an account to discover our amazing prices.</p>
                        <Link to="/auth" className="btn btn-primary">
                            Go to Login / Sign Up
                        </Link>
                    </div>
                )}
            </div>        
            </div>
        </>
    )
}