import { Close } from "./Icons/Close.jsx";
import { NavList } from "../static/NavList.js";
export const Sidebar = ({ hiddenMenu, active }) => {
  return (
    <>
      <div
        className={` 
                  z-20 fixed top-0 left-0 w-screen h-screen
                  bg-black/70 transform ease-out duration-500
                  ${active ? "translate-x-0" : "-translate-x-full"}
                  `}
      ></div>
      <div
        className={`
          bg-white 
          z-30 fixed top-0 left-0
          h-screen w-3/5 
          transition-transform transform ease-out duration-500
          p-7 
          ${active ? "translate-x-0" : "-translate-x-full"}
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
