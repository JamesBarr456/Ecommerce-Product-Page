import { useState } from "react";
import { Sidebar } from "./assets/components/Sidebar";
import { Carrousel } from "./assets/components/common/Carrousel";
import { DescriptionProduct } from "./assets/components/DescriptionProduct";
import { Gallery } from "./assets/components/gallery/Gallery";
import { useResizeListener } from "./assets/hooks/useResizeListener";
import { Products } from "./assets/static/Data";
import { useCounter } from "./assets/hooks/useCounter";
import { Slider } from "./assets/components/common/Slider";
import { Navbar } from "./assets/components/Navbar";
export const App = () => {
  const { count, handleMinusCount, handlePlusCount } = useCounter({
    maxCount: Products.length - 1,
  });
  const [activeSideBar, setActiveSideBar] = useState(false);

  // Funcion para activar el menu desplegable
  const toggleMenu = () => {
    setActiveSideBar(!activeSideBar);
  };
  //Funcion para activar el carrito

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
                  container  flex justify-between 
                  mx-auto px-6 py-6  lg:py-10
                 lg:border-Grayish-Blue lg:border-b-2"
      >
        <Navbar handlerMenu={toggleMenu} />
        <Sidebar hiddenSidebar={toggleMenu} showSidebar={activeSideBar} />
      </header>
      <main
        className="
                  container lg:flex lg:justify-evenly 
                  md:w-full 
                  mx-auto lg:py-20"
      >
        {/* Este es la section del carrousel de movile */}
        <section className="overflow-hidden lg:hidden w-full relative">
          <Carrousel count={count} imgs={Products}></Carrousel>
          <Slider
            minusCount={handleMinusCount}
            plusCount={handlePlusCount}
          ></Slider>
        </section>
        <Gallery />
        <DescriptionProduct />
      </main>
    </>
  );
};
