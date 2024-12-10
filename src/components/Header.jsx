import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between bg-foreground px-16 py-4">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-3xl font-bold text-primary">ShoppyGlobe</h1>
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-8 text-xl">
          <li>
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
          </li>

          <li>
            <Link to="/cart" className="flex items-center hover:text-primary">
              <IoCartOutline size={24} />
              <span className="ml-2 mr-1">Cart</span>
              <span className="font-semiboldbold flex h-[32px] w-[32px] items-center justify-center rounded-full bg-primary text-primary-content">
                0
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
