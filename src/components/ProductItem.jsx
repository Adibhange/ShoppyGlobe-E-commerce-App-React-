import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = (product) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product }));
  };
  return (
    <article className="rounded-lg bg-foreground p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-60 w-full"
        />
      </Link>
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="font-semibold">{product.title}</h2>
        <p>Price: ${product.price}</p>
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
