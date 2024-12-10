import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-2xl">Page not found</p>
      <Link to="/" className="text-primary-content">
        <button className="bg-primary text-primary-content rounded-md px-4 py-2">
          Go back home
        </button>
      </Link>
    </section>
  );
};

export default NotFound;
