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
import { useResizeListener } from "./assets/helpers/useResizeListener";
export const App = () => {
  const [activeSideBar, setActiveSideBar] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const { addToCart } = useProductContext();
  // Funcion para activar el menu desplegable
  const toggleMenu = () => {
    setActiveSideBar(!activeSideBar);
  };
  //Funcion para activar el carrito
  const toggleCart = () => {
    setActiveCart(!dropDownCart);
  };

  //Hook para controlar que si pasa el screen a lg el menu desplegable se cierre si esta abierto
  useResizeListener(
    1024,
    () => {
      if (activeSideBar) {
        toggleMenu();
      }
    },
    [activeSideBar]
  );
  return (
    <>
      <header
        className="
                  container flex justify-between 
                  mx-auto px-6 py-6 lg:mb-20 lg:py-10
                 lg:border-Grayish-Blue lg:border-b-2"
      >
        <picture
          className="
                    flex items-center gap-5 lg:gap-16"
        >
          <button
            onClick={toggleMenu}
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
          <div onClick={toggleCart} className="relative">
            <button
              className="
                        text-[#69707D] hover:text-Orange"
            >
              <Cart />
            </button>
            {addToCart === 0 ? null : (
              <span
                className="
                          absolute -top-2 -right-2 px-2
                          bg-Orange rounded-md 
                          text-white font-bold  text-[10px]"
              >
                {addToCart}
              </span>
            )}
          </div>
          <img
            src={avatar}
            alt="avatar"
            className="
                      w-6 h-6 lg:w-12 lg:h-12 
                      border-transparent border-2 rounded-full hover:border-Orange"
          />
        </picture>
        {activeSideBar && (
          <DropdownMenu hiddenMenu={toggleMenu} active={activeSideBar} />
        )}
        {activeCart && <CartModal />}
      </header>
      <main
        className="
                  container lg:flex lg:justify-evenly 
                  md:w-full lg:h-[600px]
                  mx-auto"
      >
        <SliderThumbnail />
        <Gallery />
        <DescriptionProduct />
      </main>
    </>
  );
};
