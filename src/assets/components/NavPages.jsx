import { NavList } from "../static/NavList";

export const NavPages = () => {
  return (
    <ul className="hidden lg:flex lg:gap-9 text-Dark-Grayish-Blue">
      {NavList.map((list) => (
        <li
          key={list.id}
          className="
                    relative hover:scale-x-100 
                    hover:after:content-[''] hover:after:bg-Orange hover:   
                    hover:after:absolute hover:after:left-0  hover:after:w-full hover:after:h-1 hover:after:-bottom-14
                    hover:after:transition-transform hover:after:duration-500"
        >
          <a href="">{list.name}</a>
        </li>
      ))}
    </ul>
  );
};
