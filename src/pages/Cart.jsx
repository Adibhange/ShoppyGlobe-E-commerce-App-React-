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
    <section className="container mx-auto mt-4 w-[95%] max-w-5xl rounded-md px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col gap-4">
        {cartItems.length > 0 ? (
          <>
            {/* Cart Items */}
            <div className="rounded-md bg-primary/20 p-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>

            {/* Checkout Section */}
            <div className="flex flex-col gap-4 rounded-md bg-primary/20 p-4 lg:p-6">
              <p className="text-base lg:text-lg">
                <span className="font-semibold">Shipping:</span> $1.00
              </p>
              <p className="text-base lg:text-lg">
                <span className="font-semibold">Subtotal:</span> $
                {cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0,
                )}
              </p>
              <button
                className="w-full rounded-md bg-primary-light px-6 py-2 text-sm text-primary-content shadow-md transition-all hover:scale-105 hover:shadow-lg sm:text-base lg:text-lg"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src={emptyCart}
              alt="empty cart"
              className="w-64 sm:w-80 lg:w-96"
            />
            <p className="mt-4 text-sm text-gray-500 sm:text-base lg:text-lg">
              Your cart is empty. Add some items to get started!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
