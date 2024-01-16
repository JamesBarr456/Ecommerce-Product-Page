import { useState } from "react";
import { useCounter } from "@/assets/hooks/useCounter";
import { ThumbnailsComponent } from "./ThumbnailsComponent";
import { Thumbnails, Products } from "@/assets/static/Data";
import { Lightbox } from "./Lightbox";
import { Carrousel } from "../common/Carrousel";

export const Gallery = () => {
  const { count, setCount } = useCounter({
    maxCount: Products.length - 1,
  });
  const [activeGalleryModal, setActiveGalleryModal] = useState(false);

  return (
    <section
      className="
                hidden lg:flex lg:flex-col lg:gap-5 
                w-[445px]"
    >
      <div
        className=" rounded-2xl overflow-hidden"
        onClick={() => setActiveGalleryModal(!activeGalleryModal)}
      >
        <Carrousel count={count} imgs={Products}></Carrousel>
      </div>

      <picture className="flex gap-4 justify-between">
        <ThumbnailsComponent
          handleThumbnailClick={setCount}
          selectedThumbnailIndex={count}
          imgs={Thumbnails}
        />
      </picture>

      {activeGalleryModal && (
        <Lightbox hiddenGalleryModal={setActiveGalleryModal} />
      )}
    </section>
  );
};
