import { useState } from "react";
import { Slider } from "./Slider";
import { useCounter } from "../helpers/useCounter";
import { Close } from "./Icons/Close";

const Thumbnail = ({ src, alt, index, onClick, isSelected }) => {
  return (
    <div
      className={`w-[89px] h-[89px] rounded-xl bg-white ${
        isSelected && "border-2 border-Orange"
      }`}
      onClick={() => onClick(index)}
    >
      <img
        className={`rounded-xl ${
          isSelected && "opacity-50"
        } transition-opacity duration-300 ease-in-out transform hover:opacity-70`}
        src={src}
        alt={alt}
      />
    </div>
  );
};

const ThumbnailListComponent = ({
  handleThumbnailClick,
  selectedThumbnailIndex,
}) => {
  const thumbnails = Array.from({ length: 4 }, (_, i) => {
    const imageSrc = `/images/png/image-product-${i + 1}-thumbnail.jpg`;
    return (
      <Thumbnail
        key={i}
        index={i}
        src={imageSrc}
        alt={`Thumbnail ${i + 1}`}
        onClick={handleThumbnailClick}
        isSelected={selectedThumbnailIndex === i}
      />
    );
  });
  return thumbnails;
};

const GalleryModal = ({ slider: Slider, showModal }) => {
  const { count, setCount } = useCounter({
    minCount: 0,
    maxCount: 3,
  });
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const handleThumbnailClick = (index) => {
    setSelectedThumbnailIndex(index);
    setCount(index);
  };

  const selectedImageSrc = `/images/png/image-product-${count + 1}.jpg`;

  const updateCountAndThumbnail = (newCount) => {
    setCount(newCount);
    setSelectedThumbnailIndex(newCount);
  };

  return (
    <section className="absolute z-50 min-h-full w-full top-0 left-0 bg-Black/70">
      <div className="hidden mx-auto my-28 relative w-[500px]  lg:flex lg:flex-col lg:gap-10 ">
        <button
          onClick={() => showModal(false)}
          className="text-white flex justify-end hover:text-Orange"
        >
          <Close></Close>
        </button>
        <picture>
          <img
            className="col-span-4 rounded-2xl  h-[500px]"
            src={selectedImageSrc}
            alt="product"
          />
        </picture>
        <picture className="flex gap-2 justify-evenly">
          <ThumbnailListComponent
            handleThumbnailClick={handleThumbnailClick}
            selectedThumbnailIndex={selectedThumbnailIndex}
          ></ThumbnailListComponent>
        </picture>
        <Slider
          minusCount={() =>
            updateCountAndThumbnail(count - 1 >= 0 ? count - 1 : 3)
          }
          plusCount={() =>
            updateCountAndThumbnail(count + 1 <= 3 ? count + 1 : 0)
          }
        ></Slider>
      </div>
    </section>
  );
};

export const Gallery = () => {
  const [dropDownGallery, setDropDownGallery] = useState(false);
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedThumbnailIndex(index);
  };

  const selectedImageSrc = `/images/png/image-product-${
    selectedThumbnailIndex + 1
  }.jpg`;

  return (
    <section className="hidden w-[445px] lg:flex lg:flex-col lg:gap-5 ">
      <picture>
        <img
          onClick={() => setDropDownGallery(!dropDownGallery)}
          className="col-span-4 rounded-2xl "
          src={selectedImageSrc}
          alt=""
        />
      </picture>
      <picture className="flex gap-4 justify-between">
        <ThumbnailListComponent
          handleThumbnailClick={handleThumbnailClick}
          selectedThumbnailIndex={selectedThumbnailIndex}
        />
      </picture>
      {dropDownGallery && (
        <GalleryModal slider={Slider} showModal={setDropDownGallery} />
      )}
    </section>
  );
};
