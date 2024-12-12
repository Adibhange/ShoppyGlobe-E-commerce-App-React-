import useFetch from "./../utils/useFetch";
import Loader from "./Loader";

const ProductLists = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://dummyjson.com/products");

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

  return (
    <div>
      <h1>Product Lists</h1>
    </div>
  );
};

export default ProductLists;
