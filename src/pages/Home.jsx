import ProductLists from "./../components/ProductLists";

const Home = () => {
  return (
    <section className="container min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-light to-primary py-12">
        <div className="container mx-auto px-4 text-center text-primary-content">
          <h1 className="mb-4 text-4xl font-extrabold tracking-wide sm:text-5xl">
            Welcome to <span className="text-copy">ShoppyGlobe</span>
          </h1>
          <p className="mb-4 text-base font-medium text-copy sm:text-lg">
            Discover the best products for your shopping needs.
          </p>
        </div>
      </div>

      {/* Product List Section */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
          Explore Our Products
        </h2>
        <ProductLists />
      </div>
    </section>
  );
};

export default Home;
