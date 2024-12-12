const ProductItem = ({
  id,
  title,
  description,
  price,
  thumbnail,
  category,
}) => {
  return (
    <article className="rounded-lg bg-foreground p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <img src={thumbnail} alt={title} className="h-60 w-full" />
      <div className="flex flex-col items-center justify-center gap-2">
        <h2>{title}</h2>
        <p>${price}</p>
        <button className="bg-primary px-6 py-2 text-primary-content">
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductItem;
