import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import emptyCart from "../assets/empty_cart.webp";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveCartItem = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleCheckout = () => {
    alert("Order Placed Successfully");
  };
  return (
    <section className="container mx-auto mt-4 w-[95%] rounded-md">
      <div className="flex flex-col gap-4">
        {cartItems.length > 0 ? (
          <>
            <div className="rounded-md bg-primary/20 p-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="m-4 flex items-center justify-between rounded-md bg-foreground p-4 text-lg shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-24"
                    />
                    <p className="font-semibold">{item.title}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-semibold">
                      ${item.price * item.quantity}
                    </p>
                    <button onClick={() => handleRemoveCartItem(item.id)}>
                      <FaTrash className="text-error" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout*/}
            <div className="flex flex-col gap-4 rounded-md bg-primary/20 px-8 py-4">
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
              <p>Shipping: $ 0.00</p>
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
