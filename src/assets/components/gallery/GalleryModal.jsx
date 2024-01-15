import { useCounter } from "../../hooks/useCounter";
import { Close } from "../Icons/Close";
import { Slider } from "../common/Slider";
import { ThumbnailsComponent } from "./ThumbnailsComponent";
import { Thumbnails, Products } from "../../static/Data";
import { Carrousel } from "../common/Carrousel";

export const GalleryModal = ({ hiddenGalleryModal }) => {
  const { count, setCount, handleMinusCount, handlePlusCount } = useCounter({
    maxCount: Products.length - 1,
  });

  return (
    <section
      className="
                  bg-black/70
                  absolute z-50 top-0 left-0
                  min-h-full w-full"
    >
      <div
        className="   
                    relative flex flex-col gap-10
                    mx-auto my-28  w-[500px]"
      >
        <button
          onClick={() => hiddenGalleryModal(false)}
          className="
                    text-white hover:text-Orange
                    flex justify-end"
        >
          <Close></Close>
        </button>
        <div className=" rounded-2xl overflow-hidden">
          <Carrousel count={count} imgs={Products}></Carrousel>
        </div>
        <picture className="flex gap-2 justify-evenly">
          <ThumbnailsComponent
            handleThumbnailClick={setCount}
            selectedThumbnailIndex={count}
            imgs={Thumbnails}
          />
        </picture>
        <Slider
          minusCount={handleMinusCount}
          plusCount={handlePlusCount}
          marginNext={"-mr-9"}
          marginPrevious={"-ml-9"}
        ></Slider>
      </div>
    </section>
  );
};
