import { createContext, use, useContext, useEffect, useState } from "react";
import { getProductById } from "../Data/products";

export const CartContext = createContext(null);
export default function CartProvider({ children }) {

    const[cartItems,setCartItem]=useState(()=>{
        const savecart=localStorage.getItem("cartItems");
        return savecart?JSON.parse(savecart):[];
    });

    useEffect(()=>{
        localStorage.setItem("cartItems",JSON.stringify(cartItems))
    },[cartItems])
    function addToCart(Productid)
    {
       const existing =cartItems.find(P=>P.id===Productid)
       if(existing)
       {
            const currentquantity=existing.quantity;
            const updateCartItems=cartItems.map((i)=>
            i.id===Productid?{id:Productid,quantity:currentquantity+1} :
            i
            )
            setCartItem(updateCartItems)
       }
       else{
        setCartItem(c=>[...c,{id:Productid,quantity:1}]);
       }
    }
function getCartItemsProducts(){
    return(
        cartItems.map(i=>({
            ...i,
            product:getProductById(i.id)
        })).filter(i=>i.product)
    )
}
function removeFromCart(id)
{
 setCartItem(cartItems.filter(i=>i.id !==id));
}

function updateQuantity(productId,quantity)
{
    
    if (quantity<=0) {
         removeFromCart(productId);
         return;
    }
    setCartItem(
        cartItems.map((i)=>
        i.id===productId?{...i,quantity}:i
        ));
}
function getCartTotal()
{
    const total=cartItems.reduce((total,item)=>{
        const product=getProductById(item.id)
        return total +(product? product.price * item.quantity:0)
    },0);
    return total
}
function clearCart()
{
    setCartItem([]);
}
{
    return (
        <CartContext.Provider value={{cartItems,
        addToCart,
        getCartItemsProducts,
        updateQuantity,
        removeFromCart,
        getCartTotal,
        clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
}}
export function useCart()
{
    const context=useContext(CartContext);
    return context;
}