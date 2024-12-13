import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-2 px-4 text-center">
      <h1 className="text-3xl font-bold sm:text-4xl">404</h1>
      <p className="text-lg sm:text-2xl">Page not found</p>
      <Link to="/">
        <button className="rounded-md bg-primary px-4 py-2 text-sm text-primary-content transition-all hover:scale-105 sm:text-base">
          Go back home
        </button>
      </Link>
    </section>
  );
};

export default NotFound;
