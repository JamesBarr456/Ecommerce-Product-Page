export const ThumbnailsComponent = ({
  handleThumbnailClick,
  selectedThumbnailIndex,
  thumbnails,
}) => {
  return (
    <>
      {thumbnails.map((thumbnail, index) => (
        <div
          key={index}
          className={`
                    overflow-hidden
                    bg-white 
                    w-[89px] h-[89px] 
                    ${
                      selectedThumbnailIndex === index &&
                      "border-2 border-Orange"
                    } 
                    rounded-xl  
                    duration-700 ease-out hover:scale-90`}
          onClick={() => handleThumbnailClick(index)}
        >
          <img
            className={`${
              selectedThumbnailIndex === index && "opacity-50"
            } transition-opacity   hover:opacity-70`}
            src={thumbnail}
            alt="thumnail"
          />
        </div>
      ))}
    </>
  );
};
