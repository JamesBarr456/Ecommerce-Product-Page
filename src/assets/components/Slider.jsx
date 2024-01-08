import { Previous } from "./Icons/Previous";
import { Next } from "./Icons/Next";

const ButtonSlider = ({ icon: Icon, action }) => {
  return (
    <button
      onClick={action}
      className="px-[13.5px] rounded-full bg-White text-Very-Dark-Blue hover:text-Orange"
    >
      <Icon />
    </button>
  );
};

export const Slider = ({ minusCount, plusCount }) => {
  return (
    <div className="absolute top-[40%] w-full px-4 h-10 flex justify-between">
      <ButtonSlider icon={Previous} action={minusCount} />
      <ButtonSlider icon={Next} action={plusCount} />
    </div>
  );
};
