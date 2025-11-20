import { useContext } from "react";
import { cartContext } from "../context/CartContext";


type cartItem={
    id:number;
    title:string;
    quantity:number;
    price:number;
}
export const Cart = () => {
  const cartCtx=useContext(cartContext);
  return (
    <div
      className={`fixed top-0 bottom-0 right-0 bg-[#f3faf7] w-1/4 h-screen max-md:w-1/2 overflow-hidden shadow-2xl
        z-50`}
    >
      <h2 className="text-4xl font-bold text-center my-5">سلة المشتريات</h2>
      <div className="overflow-y-auto h-[85%]">
        {cartCtx.cartItems.length === 0 ? (
          <p className="text-center mt-10 text-xl">سلة المشتريات فارغة</p>
        ) : (
          cartCtx.cartItems.map((item:cartItem) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border-b"
            >
              <span>{item.title}</span>
              <span>{item.quantity}</span>
              <span>{item.price}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};



