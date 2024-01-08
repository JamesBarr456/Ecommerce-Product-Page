import logo from "../public/images/svg/logo.svg";
import avatar from "../public/images/png/image-avatar.png";
import { useState } from "react";
import { Cart } from "./assets/components/Icons/Cart";
import { Menu } from "./assets/components/Icons/Menu";
import { DropdownMenu } from "./assets/components/DropdownMenu";
import { SliderThumbnail } from "./assets/components/SliderThumbnail";
import { DescriptionProduct } from "./assets/components/DescriptionProduct";
import { CartModal } from "./assets/components/CartModal";
import { useProductContext } from "./assets/hooks/ProductContext";
import { Gallery } from "./assets/components/Gallery";
import { NavPages } from "./assets/components/NavPages";
export const App = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const [dropDownCart, setDropDownCart] = useState(false);
  const { addToCart } = useProductContext();
  const activeMenu = () => {
    setDropDownMenu(!dropDownMenu);
  };
  const activeCart = () => {
    setDropDownCart(!dropDownCart);
  };
  return (
    <>
      <header className="container mx-auto flex justify-between px-6 py-6 lg:mb-20 lg:py-10 lg:border-Grayish-Blue lg:border-b-2">
        <picture className="flex items-center gap-5 lg:gap-16">
          <button
            onClick={activeMenu}
            className="text-[#69707D] hover:text-Orange lg:hidden"
          >
            <Menu></Menu>
          </button>
          <img src={logo} alt="sneakers" />
          <NavPages></NavPages>
        </picture>
        <picture className="flex items-center gap-5 lg:gap-12">
          <div onClick={activeCart} className="relative">
            <button className="text-[#69707D] hover:text-Orange">
              <Cart></Cart>
            </button>
            {addToCart === 0 ? null : (
              <span className="absolute -top-2 bg-Orange text-White font-bold px-2 rounded-md -right-2 text-[10px]">
                {addToCart}
              </span>
            )}
          </div>
          <img
            src={avatar}
            alt="avatar"
            className="w-6 h-6 lg:w-12 lg:h-12 border-transparent border-2 rounded-full hover:border-Orange "
          />
        </picture>
        {dropDownMenu ? (
          <DropdownMenu activeMenu={activeMenu}></DropdownMenu>
        ) : null}
        {dropDownCart ? <CartModal></CartModal> : null}
      </header>
      <main className="container  mx-auto md:w-full lg:h-[600px] lg:flex lg:justify-evenly">
        <SliderThumbnail></SliderThumbnail>
        <Gallery></Gallery>
        <DescriptionProduct></DescriptionProduct>
      </main>
    </>
  );
};
