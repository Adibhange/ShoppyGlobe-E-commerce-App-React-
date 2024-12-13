import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { totalCartQuantity } from "../redux/cartSlice";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalQuantity = useSelector(totalCartQuantity);

  return (
    <header className="sticky top-0 z-10 bg-foreground shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-8 lg:px-16">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-primary sm:text-2xl lg:text-3xl"
        >
          ShoppyGlobe
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-4 text-sm sm:gap-6 sm:text-base lg:gap-8 lg:text-xl">
            {/* Home Link */}
            <li>
              <Link
                to="/"
                className="transition-colors duration-300 hover:text-primary"
              >
                Home
              </Link>
            </li>

            {/* Cart Link */}
            <li>
              <Link
                to="/cart"
                className="flex items-center transition-colors duration-300 hover:text-primary"
              >
                <IoCartOutline size={20} className="sm:size-[24px]" />
                <span className="ml-1 sm:ml-2">Cart</span>
                <span className="ml-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-content sm:h-8 sm:w-8 sm:text-sm lg:h-[32px] lg:w-[32px]">
                  {totalQuantity}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
