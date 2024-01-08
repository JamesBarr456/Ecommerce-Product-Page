import minus from "../../../public/images/svg/icon-minus.svg";
import plus from "../../../public/images/svg/icon-plus.svg";
import { useProductContext } from "../hooks/ProductContext";
import { Cart } from "./Icons/Cart";
export const DescriptionProduct = () => {
  const { countProduct, increaseProducts, decreaseProducts, handleAddToCart } =
    useProductContext();
  return (
    <section className="lg:flex lg:items-center lg:w-[450px]">
      <div className="flex flex-col gap-6 p-7 lg:p-0 font-Kumbh-Sans">
        <h2 className="text-Orange text-xs lg:text-base tracking-[2px] font-bold">
          SNEAKER COMPANY
        </h2>
        <h1 className="font-bold text-3xl lg:text-[42px] ">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-[15px] lg:text-base  text-Dark-Grayish-Blue">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring durable rubber outer sole, they'll withstand everything the
          weather can offer.
        </p>
        <div className="flex justify-between font-bold lg:flex-col lg:gap-5">
          <p className="flex items-center gap-4 text-3xl">
            $125.00
            <span className="text-base bg-Pale-Orange px-2 py-1 rounded-md text-Orange">
              50%
            </span>
          </p>
          <p className="text-Light-Grayish-blue line-through">$250.00</p>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row mb-10 lg:justify-between ">
          <div className="bg-Grayish-Blue flex items-center rounded-md justify-between p-4 lg:w-[35%] font-bold  ">
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
          <button
            onClick={handleAddToCart}
            className="flex gap-4 p-4 rounded-md hover:opacity-50  bg-Orange  text-White font-bold justify-center lg:w-[60%]"
          >
            <Cart></Cart>
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </section>
  );
};
