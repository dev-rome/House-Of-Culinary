import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavItem from "./NavItem";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { title: "Home", href: "#" },
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Contact", href: "#contact" },
  ];

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center">
          <div className="text-white font-bold text-xl">Your Logo</div>
          <ul className="hidden lg:flex col-start-4 gap-4 justify-end">
            {items.map(({ title, href }) => {
              return (
                <NavItem
                  onClick={handleToggleMenu}
                  key={href}
                  title={title}
                  href={href}
                />
              );
            })}
          </ul>
          <div className="hidden lg:block col-start-4"></div>
          <button
            className="text-white lg:hidden col-start-3 justify-self-end mr-4"
            onClick={handleToggleMenu}
            aria-label="Toggle menu"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-slate-900 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-white"
            onClick={handleToggleMenu}
            aria-label="Close menu"
          >
            <FiX size={24} />
          </button>
        </div>
        <ul className="grid grid-rows-auto gap-4 p-4">
          {items.map(({ title, href }) => {
            return (
              <NavItem
                onClick={handleToggleMenu}
                key={href}
                title={title}
                href={href}
              />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
