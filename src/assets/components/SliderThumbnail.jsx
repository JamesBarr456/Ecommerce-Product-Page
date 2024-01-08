import { Slider } from "./Slider";
import { useCounter } from "../helpers/useCounter";

export const SliderThumbnail = () => {
  const { count, handleMinusCount, handlePlusCount } = useCounter({
    minCount: 1,
    maxCount: 4,
  });
  return (
    <section
      className="container relative h-[300px] md:h-[500px] lg:hidden bg-cover bg-center bg-no-repeat"
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
