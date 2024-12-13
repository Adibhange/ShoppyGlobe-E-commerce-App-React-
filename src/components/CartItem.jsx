import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";

const CartItem = (item) => {
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

  return (
    <article
      key={item.id}
      className="m-4 flex flex-col items-center justify-between gap-4 rounded-md bg-foreground p-4 text-base shadow-md sm:flex-row sm:text-lg"
    >
      {/* Product Info */}
      <Link
        to={`/product/${item.id}`}
        className="flex flex-col items-center gap-4 sm:flex-row"
      >
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-20 w-20 rounded-md sm:h-24 sm:w-24 lg:h-28 lg:w-28"
        />
        <p className="text-center font-semibold sm:text-left">{item.title}</p>
      </Link>

      {/* Product Actions */}
      <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
        {/* Price */}
        <p className="font-semibold">${item.price * item.quantity}</p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2 rounded-md border-2 border-border px-2 py-1">
          <button
            className="px-2 py-1 transition-transform hover:scale-105"
            onClick={() => handleDecreaseQuantity(item.id)}
          >
            <FaMinus />
          </button>
          <p className="min-w-[20px] text-center">{item.quantity}</p>
          <button
            className="px-2 py-1 transition-transform hover:scale-105"
            onClick={() => handleAddToCart(item)}
          >
            <FaPlus />
          </button>
        </div>

        {/* Remove Item */}
        <button
          className="text-error transition-transform hover:scale-110"
          onClick={() => handleRemoveCartItem(item.id)}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
