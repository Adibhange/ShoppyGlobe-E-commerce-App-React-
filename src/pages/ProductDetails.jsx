import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import useFetch from "../utils/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    data: product,
    loading,
    error,
  } = useFetch(`https://dummyjson.com/products/${id}`);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="bg-error text-error-content container mx-auto flex w-1/2 items-center justify-center p-4">
        Error: {error}
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product }));
  };

  return (
    <section className="container mx-auto mt-4 flex flex-col gap-4 rounded-lg bg-foreground shadow-md sm:w-3/4 sm:flex-row">
      {/* Image Section */}
      <div className="flex w-full items-center justify-center rounded-t-lg bg-primary/20 sm:w-1/2 sm:rounded-l-lg sm:rounded-t-none">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-64 sm:h-96"
        />
      </div>

      {/* Details Section */}
      <div className="w-full space-y-8 p-4 sm:w-1/2">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold sm:text-3xl">{product.title}</h1>
          <p className="text-xl text-primary sm:text-2xl">
            Price: ${product.price}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-base sm:text-lg">
          <p className="font-bold">⭐{product.rating}</p>
          <p>
            <span className="font-bold">Category:</span> {product.category}
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold sm:text-2xl">Description</h2>
          <p>{product.description}</p>
        </div>

        <button
          className="w-full rounded-md bg-primary py-2 text-primary-content transition-transform duration-300 hover:scale-105"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;
