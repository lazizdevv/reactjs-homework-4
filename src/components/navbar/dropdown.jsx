import React, { useState } from "react";
import { ArrowIcon } from "../../assets/svg/arrow";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="flex relative justify-between w-full px-6 bg-transparent focus:border"
        >
          Каталог
          <span className="absolute right-0 py-2">
            <ArrowIcon />
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="z-10 origin-top-right absolute left-1 right-0 mt-2 w-52 lg:w-[309px] shadow-lg bg-[#D5AF86] ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a href="#" className="block hover:bg-primary px-4 py-2  border-b" role="menuitem">
              Хиты продаж
            </a>

            <a href="#" className="block hover:bg-primary px-4 py-2  border-b" role="menuitem">
              Скидки
            </a>

            <a href="#" className="block hover:bg-primary px-4 py-2  border-b" role="menuitem">
              Новинки
            </a>

            <a href="#" className="block hover:bg-primary px-4 py-2  border-b" role="menuitem">
              Колбасные и мясные изделия
            </a>

            <a href="#" className="block hover:bg-primary px-4 py-2  border-b" role="menuitem">
              Молочные продукты
            </a>

            <a href="#" className="block hover:bg-primary px-4 py-2  border-b" role="menuitem">
              Морепродукты
            </a>

            <a href="#" className="block hover:bg-primary px-4 py-2  border-b" role="menuitem">
              Пиво
            </a>

            <a href="#" className="block hover:bg-primary px-4 py-2  border-b" role="menuitem">
              Замороженные продукты
            </a>

            <a href="#" className="block hover:bg-primary px-4 py-2  border-b" role="menuitem">
              Мед
            </a>

            <a href="#" className="block hover:bg-primary px-4 py-2  border-b" role="menuitem">
              Свежие овощи
            </a>

            <a href="#" className="block hover:bg-primary px-4 py-2  border-b" role="menuitem">
              Свежие фрукты
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
