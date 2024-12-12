import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import emptyCart from "../assets/empty_cart.webp";
import { FaTrash } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

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
                  <Link to={`/product/${item.id}`}>
                    <div className="flex items-center gap-4">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-24"
                      />
                      <p className="font-semibold">{item.title}</p>
                    </div>
                  </Link>

                  <div className="flex items-center gap-4">
                    <p className="font-semibold">
                      ${item.price * item.quantity}
                    </p>

                    {/* Quantity  */}
                    <div className="flex items-center gap-2 rounded-md border-2 border-border">
                      <button
                        className="px-2 py-1"
                        onClick={() => handleDecreaseQuantity(item.id)}
                      >
                        <FaMinus />
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        className="px-2 py-1"
                        onClick={() => handleAddToCart(item)}
                      >
                        <FaPlus />
                      </button>
                    </div>

                    {/* Remove All Items  */}
                    <button onClick={() => handleRemoveCartItem(item.id)}>
                      <FaTrash className="text-error" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout*/}
            <div className="flex flex-col gap-4 rounded-md bg-primary/20 px-8 py-4">
              <p>Shipping: $ 0.00</p>
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
