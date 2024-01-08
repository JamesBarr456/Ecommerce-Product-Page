import { Close } from "./Icons/Close.jsx";
import { NavList } from "../static/NavList.js";
export const DropdownMenu = ({ activeMenu }) => {
  return (
    <div className="absolute z-50 w-full min-h-screen top-0 left-0 bg-Black/70">
      <div className="w-[70%] bg-White min-h-screen p-7">
        <button
          onClick={activeMenu}
          className="text-[#69707D] hover:text-Orange"
        >
          <Close></Close>
        </button>
        <ul className="flex flex-col gap-4 mt-12">
          {NavList.map((nav) => (
            <li key={nav.id} className=" text-black font-bold">
              {nav.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
