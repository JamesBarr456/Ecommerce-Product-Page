import product from "../../../public/images/png/image-product-1-thumbnail.jpg";
import trash from "../../../public/images/svg/icon-delete.svg";
import { useProductContext } from "../hooks/ProductContext";

//Contenido del cart Modal cuando se agrega productos
const ContentCartModal = (handleTrash, count) => {
  const price = 125;
  return (
    <div className="flex flex-col items-center p-5 gap-6 ">
      <div className="flex items-center  justify-between w-full">
        <img src={product} className="w-12 h-12  rounded-md" alt="product" />
        <div className="text-Dark-Grayish-Blue">
          <p>Fall Limited Edition Sneakers</p>
          <span>
            ${price.toFixed(2)} x {count}
            <span className="font-bold text-Black">
              ${(price * count).toFixed(2)}
            </span>
          </span>
        </div>
        <img src={trash} onClick={handleTrash} alt="delete" />
      </div>
      <button
        className="w-full rounded-lg p-4 bg-Orange  text-White font-bold"
        type="button"
      >
        Checkout
      </button>
    </div>
  );
};

// Contenido con cart Modal cuando no se agrega productos
const EmptyCartModal = () => {
  return (
    <p className="w-full text-center text-Dark-Grayish-Blue font-bold py-[72px]">
      Your cart is empty
    </p>
  );
};

// Cart Modal
export const CartModal = () => {
  const { addToCart, handleTrashCart } = useProductContext();

  return (
    <section className="z-20 absolute top-20 right-0 md:right-16 lg:right-8 lg:top-28  px-2 w-[375px] ">
      <div className=" bg-White rounded-xl shadow-custom ">
        <h2 className="p-5  font-bold border-b">Cart</h2>
        {addToCart > 0
          ? ContentCartModal(handleTrashCart, addToCart)
          : EmptyCartModal()}
      </div>
    </section>
  );
};
