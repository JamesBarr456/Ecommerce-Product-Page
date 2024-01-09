import { Slider } from "./Slider";
import { useCounter } from "../helpers/useCounter";

export const SliderThumbnail = () => {
  const { count, handleMinusCount, handlePlusCount } = useCounter({
    minCount: 1,
    maxCount: 4,
  });
  return (
    <section
      className="
                bg-cover bg-center bg-no-repeat
                container relative 
                lg:hidden
                h-[300px] md:h-[500px]"
      style={{
        backgroundImage: `url('../../../public/images/png/image-product-${count}.jpg')`,
      }}
    >
      <Slider
        minusCount={handleMinusCount}
        plusCount={handlePlusCount}
      ></Slider>
    </section>
  );
};
