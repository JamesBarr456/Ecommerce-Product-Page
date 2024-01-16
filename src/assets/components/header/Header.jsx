import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { useResizeListener } from "@/assets/hooks/useResizeListener";

export const Header = () => {
    const [activeSideBar, setActiveSideBar] = useState(false);

    const toggleMenu = () => {
        setActiveSideBar(!activeSideBar);
    };

    useResizeListener(
        1024,
        () => {
            if (activeSideBar) {
                toggleMenu();
            }
        },
        [activeSideBar]
    );
    return (
        <header
            className="
              container  flex justify-between 
              mx-auto px-6 py-6  lg:py-10
             lg:border-Grayish-Blue lg:border-b-2"
        >
            <Navbar handlerMenu={toggleMenu} />
            <Sidebar hiddenSidebar={toggleMenu} showSidebar={activeSideBar} />
        </header>
    )
}


