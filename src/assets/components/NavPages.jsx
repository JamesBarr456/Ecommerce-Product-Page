import { NavList } from "../static/NavList";

export const NavPages = () => {
  return (
    <ul className="hidden lg:flex lg:gap-9 text-Dark-Grayish-Blue">
      {NavList.map((list) => (
        <li
          key={list.id}
          className="
                    relative 
                    after:content-[''] after:bg-Orange   
                    after:absolute  
                    after:w-full after:h-1 
                    after:-bottom-14  after:left-0
                    after:rounded-md
                    after:transition-transform after:scale-x-0 after:duration-500 after:ease-in-out
                    hover:after:transform hover:after:scale-x-100"
        >
          <a href="">{list.name}</a>
        </li>
      ))}
    </ul>
  );
};
