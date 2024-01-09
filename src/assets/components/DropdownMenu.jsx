import { Close } from "./Icons/Close.jsx";
import { NavList } from "../static/NavList.js";
export const DropdownMenu = ({ activeMenu }) => {
  return (
    <div
      className="
                absolute z-50 top-0 left-0
                w-full min-h-screen 
                bg-black/70"
    >
      <div
        className="
                  w-[70%]  min-h-screen 
                  p-7
                  bg-white"
      >
        <button
          onClick={activeMenu}
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
    </div>
  );
};
