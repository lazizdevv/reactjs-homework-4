import React from "react";
import { LogoIcon } from "../../assets/svg/logo";
import { StarIcon } from "../../assets/svg/star";
import { BasketIcon } from "../../assets/svg/basket";
import { SearchIcon } from "../../assets/svg/search";

import Dropdown from "./dropdown";

export const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-between py-5 flex-wrap">
          <div className="flex align-middle gap-3 justify-center">
            <LogoIcon />
            <p className="h-10 my-auto truncate text-[15px] leading-[130%]">
              Колбасы и мясные <br /> деликатесы
            </p>
          </div>
          <div className="flex justify-between align-middle gap-3">
            <span className="px-[14px] py-[13px] relative cursor-pointer">
              <StarIcon />
              <span className="absolute top-[5px] right-[2px] px-[5px] py-[] bg-secondary  rounded-[50%] text-xs">
                3
              </span>
            </span>
            <span className="px-[14px] py-[13px] bg-[#EFF2F4] rounded-[50%] cursor-pointer">
              <BasketIcon />
            </span>
            <p className="text-secondaryText">
              Товаров:
              <span className="text-primary font-bold">3</span>
              <br />
              <span className="text-primary font-bold">6 540 ₽</span>
            </p>
          </div>
        </div>
      </div>
      <nav className="bg-[#253B6A]">
        <div className="container">
        <div className="flex justify-between flex-wrap bg-[#253B6A] text-white ">
          <ul className="nav-list flex justify-center align-middle gap-3 lg:gap-24 mt-5 pb-3 flex-wrap text-xs sm:text-base font-bold font-libre leading-5">
            <li className="nav-item">
              <a href="#" className="nav-link">
                О ресноте
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <Dropdown />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Наши магазины
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Контакты
              </a>
            </li>
          </ul>

          <div className="search hidden sm:flex sm:w-[348px] relative font-times">
            <input
              className="w-[85%] outline-none bg-transparent h-12"
              type="text"
              placeholder="Поиск по сайту"
            />
            <button className="absolute right-0 top-3 bg-transparent p-2">
              <SearchIcon />
            </button>
          </div>
        </div>
        </div>
      </nav>
    </>
  );
};
