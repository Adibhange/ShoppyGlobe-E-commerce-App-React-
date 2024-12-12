import useFetch from "./../utils/useFetch";
import Loader from "./Loader";
import ProductItem from "./ProductItem";

const ProductLists = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  const products = data?.products;

  // console.log(products);

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
    <div className="mx-auto mt-4 grid w-11/12 grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductLists;
