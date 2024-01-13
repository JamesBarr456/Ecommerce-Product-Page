import { useState } from "react";
import { useCounter } from "../helpers/useCounter";
import { Close } from "./Icons/Close";
import { ThumbnailsComponent } from "./ThumbnailsComponent";
import { Thumbnails, Products } from "../static/Images";

export const GalleryModal = ({ slider: Slider, hiddenModal }) => {
  const { count, setCount } = useCounter({
    minCount: 0,
    maxCount: 3,
  });

  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedThumbnailIndex(index);
    setCount(index);
  };

  const updateCountAndThumbnail = (newCount) => {
    setCount(newCount);
    setSelectedThumbnailIndex(newCount);
  };

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
          onClick={() => hiddenModal(false)}
          className="
                    text-white hover:text-Orange
                    flex justify-end"
        >
          <Close></Close>
        </button>
        <picture>
          {Products.map((product, index) => (
            <img
              key={index}
              className={`
                    rounded-2xl 
                    transition-opacity duration-150 ease
                    ${
                      selectedThumbnailIndex === index
                        ? "animate-fade"
                        : "invisible"
                    }`}
              src={selectedThumbnailIndex === index ? product : ""}
              alt="product"
            />
          ))}
        </picture>
        <picture className="flex gap-2 justify-evenly">
          <ThumbnailsComponent
            handleThumbnailClick={handleThumbnailClick}
            selectedThumbnailIndex={selectedThumbnailIndex}
            thumbnails={Thumbnails}
          />
        </picture>
        <Slider
          minusCount={() =>
            updateCountAndThumbnail(count - 1 >= 0 ? count - 1 : 3)
          }
          plusCount={() =>
            updateCountAndThumbnail(count + 1 <= 3 ? count + 1 : 0)
          }
          marginNext={"-mr-9"}
          marginPrevious={"-ml-9"}
        ></Slider>
      </div>
    </section>
  );
};
