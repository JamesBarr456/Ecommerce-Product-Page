import { useState } from "react";
import { Cart } from "../Icons/Cart";
import { Menu } from "../Icons/Menu";
import { CartModal } from "../CartModal";
import logo from '@/assets/static/svg/logo.svg';
import avatar from "@/assets/static/png//image-avatar.png";
import { NavList } from "@/assets/static/Data";
import { useProductContext } from "@/assets/hooks/ProductContext";

const NavPages = () => {
  return (
    <ul className="hidden lg:flex lg:gap-9 text-Dark-Grayish-Blue">
      {NavList.map((nav, index) => (
        <li
          key={index}
          className="
                    relative 
                    after:content-[''] after:bg-Orange   
                    after:absolute  
                    after:w-full after:h-1 
                    after:-bottom-14  after:left-0
                    after:rounded-md
                    after:transition-transform after:scale-x-0 after:duration-500 after:ease-in-out
                    hover:after:transform hover:after:scale-x-100"
        >
          <a href="">{nav}</a>
        </li>
      ))}
    </ul>
  );
};
//asasd
export const Navbar = ({ handlerMenu }) => {
  const { addToCart } = useProductContext();
  const [activeCart, setActiveCart] = useState(false);

  const toggleCart = () => {
    setActiveCart(!activeCart);
  };
  return (
    <>
      <picture
        className="
                    flex items-center gap-5 lg:gap-16"
      >
        <button
          onClick={handlerMenu}
          className="
                      text-[#69707D] hover:text-Orange lg:hidden"
        >
          <Menu />
        </button>
        <img src={logo} alt="sneakers" />
        <NavPages />
      </picture>
      <picture
        className="
                    flex items-center gap-5 lg:gap-12"
      >
        <div className="relative">
          <button
            onClick={toggleCart}
            className="
                        text-[#69707D] hover:text-Orange
                        "
          >
            <Cart />
          </button>
          <CartModal active={activeCart} />
          <span
            className={`
                          absolute -top-2 -right-1 w-4 h-4
                          bg-Orange rounded-full
                          text-white text-center font-bold  text-[10px]
                          transform transition-all  duration-500 ease-in-out
                          ${addToCart === 0
                ? "opacity-0 scale-0"
                : "opacity-100 scale-100"
              }`}
          >
            {addToCart}
          </span>
        </div>
        <img
          src={avatar}
          alt="avatar"
          className="
                      w-6 h-6 lg:w-12 lg:h-12 
                      border-transparent border-2 rounded-full hover:border-Orange"
        />
      </picture>
    </>
  );
};
