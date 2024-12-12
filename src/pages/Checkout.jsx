import { useSelector } from "react-redux";

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = 1;

  const total = subTotal + shipping;

  const handlePlaceOrder = () => {
    alert("Order Placed Successfully");
  };

  return (
    <section className="container mx-auto mt-4 w-2/5 rounded-md bg-foreground shadow-md">
      <div className="space-y-4 p-8">
        <h1 className="text-center text-2xl font-semibold">Checkout</h1>

        <p className="text-xl">Payment Summary</p>

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
          <p className="flex justify-between">
            <span>Total: </span>
            <span>${total}</span>
          </p>

          <button
            className="w-full rounded-md bg-primary-light px-6 py-2 text-primary-content shadow-md"
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
