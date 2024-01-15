import { Previous } from "../Icons/Previous";
import { Next } from "../Icons/Next";

const ButtonSlider = ({ icon: Icon, action, margin, bgColor, hoverColor }) => {
  // Clases por defecto
  const buttonClasses = `
                        hover:text-${hoverColor || "Orange"} text-Very-Dark-Blue
                        px-[13.5px] 
                        rounded-full`;

  // Clases personalizadas según las propiedades recibidas
  const customizedClasses = `
    ${margin ? margin : ""}
    ${bgColor ? bgColor : "bg-white"}
  `;

  return (
    <button
      onClick={action}
      className={`${customizedClasses} ${buttonClasses}`}
    >
      <Icon />
    </button>
  );
};

export const Slider = ({
  minusCount,
  plusCount,
  marginPrevious,
  marginNext,
  bgColorPrevious,
  bgColorNext,
}) => {
  return (
    <div
      className="
                absolute top-[40%] 
                flex justify-between
                w-full  h-10 
                px-4"
    >
      <ButtonSlider
        icon={Previous}
        action={minusCount}
        margin={marginPrevious}
        bgColor={bgColorPrevious}
      />
      <ButtonSlider
        icon={Next}
        action={plusCount}
        margin={marginNext}
        bgColor={bgColorNext}
      />
    </div>
  );
};
