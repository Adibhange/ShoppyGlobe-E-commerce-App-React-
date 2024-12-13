import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
      className="m-4 flex items-center justify-between rounded-md bg-foreground p-4 text-lg shadow-md"
    >
      <Link to={`/product/${item.id}`}>
        <div className="flex items-center gap-4">
          <img src={item.thumbnail} alt={item.title} className="h-24" />
          <p className="font-semibold">{item.title}</p>
        </div>
      </Link>

      <div className="flex items-center gap-4">
        <p className="font-semibold">${item.price * item.quantity}</p>

        {/* Quantity  */}
        <div className="flex items-center gap-2 rounded-md border-2 border-border">
          <button
            className="px-2 py-1"
            onClick={() => handleDecreaseQuantity(item.id)}
          >
            <FaMinus />
          </button>
          <p>{item.quantity}</p>
          <button className="px-2 py-1" onClick={() => handleAddToCart(item)}>
            <FaPlus />
          </button>
        </div>

        {/* Remove All Items  */}
        <button onClick={() => handleRemoveCartItem(item.id)}>
          <FaTrash className="text-error" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
