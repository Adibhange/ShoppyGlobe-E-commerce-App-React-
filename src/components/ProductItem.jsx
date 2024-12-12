import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductItem = ({ id, title, price, thumbnail }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price }));
  };
  return (
    <article className="rounded-lg bg-foreground p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <img src={thumbnail} alt={title} className="h-60 w-full" />
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="font-semibold">{title}</h2>
        <p>Price: ${price}</p>
        <button
          className="bg-primary px-6 py-2 text-primary-content"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductItem;
