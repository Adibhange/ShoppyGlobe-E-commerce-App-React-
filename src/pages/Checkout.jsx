import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = 1;

  const total = subTotal + shipping;

  const handlePlaceOrder = () => {
    navigate("/");
  };

  return (
    <section className="container mx-auto mt-4 w-full max-w-lg rounded-md bg-foreground px-4 py-6 shadow-md sm:px-8">
      <div className="space-y-4">
        <h1 className="text-center text-xl font-semibold sm:text-2xl">
          Checkout
        </h1>

        <p className="text-lg sm:text-xl">Payment Summary</p>

        <div className="flex flex-col gap-2">
          <p className="flex justify-between">
            <span>Subtotal: </span>
            <span>${subTotal}</span>
          </p>
          <p className="flex justify-between">
            <span>Shipping: </span>
            <span>${shipping}.00</span>
          </p>

          <hr className="border-2 border-border" />
          <p className="flex justify-between font-semibold">
            <span>Total: </span>
            <span>${total}</span>
          </p>

          <button
            className="w-full rounded-md bg-primary-light px-6 py-2 text-sm text-primary-content shadow-md transition-all hover:scale-105 hover:shadow-lg sm:text-base"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
