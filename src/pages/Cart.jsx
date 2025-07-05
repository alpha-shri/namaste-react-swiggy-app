import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart } from "../slices/CartSlice";
import { useEffect } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // ? Select particular portion of the sotre

  //   const store = useSelector((store) => store);
  //   const cartItems = store.cart.items;

  // * Both will work, in second approach I am subscribing to entire store
  // * Now any change in any slice of the Store, this will affect here as well
  // * Subscribe to particular slice of the store
  // ! Performance degrades.

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect( () => {
    cartItems
  }, [])

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="p-2 m-2 bg-black hover:bg-gray-500 cursor-pointer text-white rounded-md"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <h2>Cart is empty, Start shopping.</h2>}
      {cartItems.map((cartItem) => (
        <CartItem cartItem={cartItem} />
      ))}
    </div>
  );
};

export default Cart;
