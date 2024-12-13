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
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="mx-auto h-48 w-full object-cover sm:h-60"
        />
      </Link>
      <div className="mt-4 flex flex-col items-center justify-center gap-2">
        <h2 className="text-center text-sm font-semibold sm:text-base">
          {product.title}
        </h2>
        <p className="text-sm text-gray-600 sm:text-base">
          Price: ${product.price}
        </p>
        <button
          className="mt-2 rounded-md bg-primary px-4 py-2 text-sm text-primary-content transition-colors duration-300 hover:bg-primary-dark sm:px-6 sm:py-2 sm:text-base"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductItem;
