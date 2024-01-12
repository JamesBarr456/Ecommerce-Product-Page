import minus from "../../../public/images/svg/icon-minus.svg";
import plus from "../../../public/images/svg/icon-plus.svg";
import { useProductContext } from "../hooks/ProductContext";
import { Cart } from "./Icons/Cart";
import { CustomButton } from "./CustomButton";
export const DescriptionProduct = () => {
  const { countProduct, increaseProducts, decreaseProducts, handleAddToCart } =
    useProductContext();
  return (
    <section
      className="
                lg:flex lg:items-center 
                lg:w-[450px]"
    >
      <div
        className="
                  font-Kumbh-Sans
                  flex flex-col gap-6 
                  p-7 lg:p-0"
      >
        <h2
          className="
                  text-Orange text-xs lg:text-base tracking-[2px] font-bold"
        >
          SNEAKER COMPANY
        </h2>
        <h1
          className="
                    font-bold text-3xl lg:text-[42px]"
        >
          Fall Limited Edition Sneakers
        </h1>
        <p
          className="
                    text-[15px] lg:text-base  text-Dark-Grayish-Blue"
        >
          These low-profile sneakers are your perfect casual wear companion.
          Featuring durable rubber outer sole, they'll withstand everything the
          weather can offer.
        </p>
        <div
          className="
                    font-bold
                    flex justify-between  lg:flex-col lg:gap-5"
        >
          <p
            className="
                      text-3xl
                      flex items-center gap-4"
          >
            $125.00
            <span
              className="
                      bg-Pale-Orange
                        text-base text-Orange
                        px-2 py-1 
                        rounded-md"
            >
              50%
            </span>
          </p>
          <p
            className="
                    text-Light-Grayish-blue line-through"
          >
            $250.00
          </p>
        </div>
        <div
          className="
                    flex flex-col gap-6 lg:flex-row lg:justify-between 
                    mb-10"
        >
          <div
            className="
                  bg-Grayish-Blue 
                  font-bold 
                  flex items-center  justify-between 
                  p-4 gap-4
                  lg:w-[50%] 
                  rounded-md"
          >
            <button>
              <img
                className="hover:opacity-50"
                onClick={decreaseProducts}
                src={minus}
                alt="minus"
              />
            </button>
            <span>{countProduct}</span>
            <button>
              <img
                className="hover:opacity-50"
                onClick={increaseProducts}
                src={plus}
                alt="plus"
              />
            </button>
          </div>
          <CustomButton onClick={handleAddToCart}>
            <div
              className="flex items-center justify-center gap-4">
              <Cart></Cart>
              <p>Add to cart</p>
            </div>
          </CustomButton>
        </div>
      </div>
    </section>
  );
};
