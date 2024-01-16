import { Carrousel } from "@/assets/components/common/Carrousel";
import { DescriptionProduct } from "@/assets/components/DescriptionProduct";
import { Gallery } from "@/assets/components/gallery/Gallery";
import { Slider } from "@/assets/components/common/Slider";
import { Header} from "@/assets/components/header/Header";
import { useCounter } from "@/assets/hooks/useCounter";
import { Products } from "@/assets/static/Data";

export const App = () => {
  const { count, handleMinusCount, handlePlusCount } = useCounter({
    maxCount: Products.length - 1,
  });
 
  return (
    <>
      <Header/>
      <main
        className="
                  container lg:flex lg:justify-evenly 
                  md:w-full 
                  mx-auto lg:py-20"
      >
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
