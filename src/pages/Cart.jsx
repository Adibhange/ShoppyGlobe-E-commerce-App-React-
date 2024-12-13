import { useSelector } from "react-redux";
import emptyCart from "../assets/empty_cart.webp";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <section className="container mx-auto mt-4 w-[95%] rounded-md">
      <div className="flex flex-col gap-4">
        {cartItems.length > 0 ? (
          <>
            <div className="rounded-md bg-primary/20 p-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>

            {/* Checkout*/}
            <div className="flex flex-col gap-4 rounded-md bg-primary/20 px-8 py-4">
              <p>Shipping: $ 1.00</p>
              <p>
                <span>Subtotal: </span>
                <span>
                  $
                  {cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0,
                  )}
                </span>
              </p>
              <button
                className="w-full rounded-md bg-primary-light px-6 py-2 text-primary-content shadow-md"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center">
            <img src={emptyCart} alt="empty cart" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
