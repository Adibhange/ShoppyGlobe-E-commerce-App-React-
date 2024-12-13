import { useEffect, useState } from "react";
import useFetch from "./../utils/useFetch";
import Loader from "./Loader";
import ProductItem from "./ProductItem";

const ProductLists = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (data?.products) {
      setProducts(data.products);
    }
  }, [data]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="bg-error text-error-content container mx-auto flex items-center justify-center p-4">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="mx-auto mt-4 w-11/12">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Products..."
        className="mb-4 w-full rounded-md border p-2 shadow-md focus:outline-primary focus:ring focus:ring-primary-light"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {/* Product List */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductLists;
