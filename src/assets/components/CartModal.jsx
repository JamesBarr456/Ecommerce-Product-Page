import { Products } from "../static/Data.js";
import { Delete } from "../components/Icons/Delete.jsx";
import { useProductContext } from "../hooks/ProductContext";
import { CustomButton } from "./common/CustomButton.jsx";

const ContentCartModal = ({ handleTrash, count }) => {
  const price = 125;

  return (
    <div
      className="
                flex flex-col items-center 
                p-5 gap-6"
    >
      <div
        className="
                  flex items-center justify-between 
                  w-full"
      >
        <img
          src={Products[0]}
          className="
                    w-12 h-12 
                    rounded-md"
          alt="product"
        />
        <div className="text-Dark-Grayish-Blue">
          <p>Fall Limited Edition Sneakers</p>
          <span>
            ${price.toFixed(2)} x {count + " "}
            <span className="font-bold text-black">
              ${(price * count).toFixed(2)}
            </span>
          </span>
        </div>
        <button
          className="text-[#69707D] hover:text-Orange"
          onClick={handleTrash}
        >
          <Delete />
        </button>
      </div>
      <CustomButton>
        <p>Checkout</p>
      </CustomButton>
    </div>
  );
};

const EmptyCartModal = () => {
  return (
    <p
      className="
                font-bold
                text-center text-Dark-Grayish-Blue
                py-[72px]
                w-full"
    >
      Your cart is empty
    </p>
  );
};

export const CartModal = ({ active }) => {
  const { addToCart, handleTrashCart } = useProductContext();

  return (
    <section
      className={`
                absolute z-10  top-20 -right-[68px] lg:top-16 
                px-2 
                w-screen sm:w-[375px]
                transform transition-all  duration-500 ease-in-out
                ${
                  active
                    ? "opacity-100 translate-y-0  translate-x-0 scale-100 "
                    : "opacity-0 -translate-y-3/4 translate-x-1/3 scale-0  "
                }
                `}
    >
      <div
        className="
                bg-white 
                rounded-xl shadow-custom"
      >
        <h2
          className="
                    font-bold 
                    p-5 
                    border-b"
        >
          Cart
        </h2>
        {addToCart > 0 ? (
          <ContentCartModal handleTrash={handleTrashCart} count={addToCart} />
        ) : (
          <EmptyCartModal />
        )}
      </div>
    </section>
  );
};
