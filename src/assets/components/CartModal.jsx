import product from "../../../public/images/png/image-product-1-thumbnail.jpg";
import { Delete } from "../components/Icons/Delete.jsx";
import { useProductContext } from "../hooks/ProductContext";

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
          src={product}
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
      <button
        className="
                 bg-Orange
                 text-white font-bold
                  p-4
                  w-full 
                  rounded-lg hover:opacity-50"
      >
        Checkout
      </button>
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

export const CartModal = () => {
  const { addToCart, handleTrashCart } = useProductContext();

  return (
    <section
      className="
                absolute z-20  top-20 right-0 md:right-16 lg:right-8 lg:top-28  
                px-2 
                w-full sm:w-[375px]"
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
