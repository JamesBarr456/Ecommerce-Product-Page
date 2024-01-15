export const ThumbnailsComponent = ({
  handleThumbnailClick,
  selectedThumbnailIndex,
  imgs,
}) => {
  return (
    <>
      {imgs.map((img, index) => (
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
                    duration-300 ease-out hover:scale-90`}
          onClick={() => handleThumbnailClick(index)}
        >
          <img
            className={`${
              selectedThumbnailIndex === index && "opacity-50"
            } transition-opacity   hover:opacity-70`}
            src={img}
            alt="thumnail"
          />
        </div>
      ))}
    </>
  );
};
