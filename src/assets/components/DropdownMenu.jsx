import { Close } from "./Icons/Close.jsx";
import { NavList } from "../static/NavList.js";
export const DropdownMenu = ({ hiddenMenu, active }) => {
  return (
    <>
      <div
        className={`
                  z-20 fixed top-0 left-0 w-screen h-screen
                  bg-black
                  ${active && "!opacity-70"}
                  opacity-0
                  transition-all 
                  `}
      ></div>
      <div
        className={`
          bg-white
          z-30 fixed top-0 left-0
          h-screen w-3/5 transition
          ease-out 
          p-7
          duration-500
          ${active ? "transform translate-x-0" : "transform -translate-x-full"}
        `}
      >
        <button
          onClick={hiddenMenu}
          className="text-[#69707D] hover:text-Orange"
        >
          <Close></Close>
        </button>
        <ul className="flex flex-col gap-4 mt-12">
          {NavList.map((nav) => (
            <li
              key={nav.id}
              className=" text-black font-bold hover:text-Orange"
            >
              <a href="">{nav.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
