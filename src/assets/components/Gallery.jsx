import { useState } from "react";
import { Slider } from "./Slider";
import { ThumbnailsComponent } from "./ThumbnailsComponent";
import { Thumbnails, Products } from "../static/Images";
import { GalleryModal } from "./GalleryModal";

export const Gallery = () => {
  const [dropDownGallery, setDropDownGallery] = useState(false);
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedThumbnailIndex(index);
  };

  return (
    <section
      className="
                hidden lg:flex lg:flex-col lg:gap-5 
                w-[445px]"
    >
      <picture>
        {Products.map((product, index) => (
          <img
            key={index}
            onClick={() => setDropDownGallery(!dropDownGallery)}
            className={`
                    rounded-2xl 
                    transition-opacity duration-300 ease
                    ${
                      selectedThumbnailIndex === index
                        ? "animate-fade"
                        : "hidden"
                    }`}
            src={selectedThumbnailIndex === index ? product : ""}
            alt="product"
          />
        ))}
      </picture>
      <picture className="flex gap-4 justify-between">
        <ThumbnailsComponent
          handleThumbnailClick={handleThumbnailClick}
          selectedThumbnailIndex={selectedThumbnailIndex}
          thumbnails={Thumbnails}
        />
      </picture>
      {dropDownGallery && (
        <GalleryModal
          slider={Slider}
          hiddenModal={setDropDownGallery}
          imgs={Products}
        />
      )}
    </section>
  );
};
