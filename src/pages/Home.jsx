import ProductLists from "../components/ProductLists";

const Home = () => {
  return (
    <section className="container min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-light to-primary py-12">
        <div className="container mx-auto text-center text-primary-content">
          <h1 className="mb-4 text-5xl font-extrabold tracking-wide">
            Welcome to <span className="text-copy">ShoppyGlobe</span>
          </h1>

          <p className="mb-4 text-lg font-medium text-copy">
            Discover the best products for your shopping needs.
          </p>
        </div>
      </div>

      {/* Product List Section */}
      <div className="container mx-auto py-10">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Explore Our Products
        </h2>
        <ProductLists />
      </div>
    </section>
  );
};

export default Home;
