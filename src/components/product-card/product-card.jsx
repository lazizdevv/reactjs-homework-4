import React from "react";
import saleimg from '../../assets/sale.png';
import {StarIcon} from '../../assets/svg/star'

export const ProductCard = function ({img,name, title,price}) {
    return(
        <>
        <div className=" border h-full  relative">
            <img src={img} alt="img" className=" mb-"/>
            <div className="p-4">
                <h1 className="text-primary font-libre text-lg font-bold leading-6 tracking-normal text-left">{name}</h1>
                <h1 className="text-[rgb(17,17,17)] font-times italic text-[15px] font-normal leading-[130%] tracking-normal text-left w-60 h-16">
                    {title}
                </h1>
                <p className="text-primary font-roboto text-3xl font-bold leading-none tracking-normal text-left">
                    {price} <span className="text-xl">₽</span>
                </p>
                <div className="flex justify-between align-middle mb-6 gap-2">
                    <del className="font-medium text-xl text-secondary text-left">660 ₽</del>
                    <div className="flex align-middle">
                        <p className="px-2 py-1 bg-secondary">-15%</p>
                        <p className="px-1 py-1 text-outlineText">Экономия 160 ₽</p>
                    </div>
                </div>
                <button className="py-3 px-7 text-white bg-primary mr-2">Купить</button>
                <button className="py-3 px-7 text-white bg-[#D5AF86]">В 1 клик</button>
                <img src={saleimg} alt="sale" className="absolute top-0 left-3" />
                <span className="absolute top-3 right-3 text-green-950 cursor-pointer" style={{color:" #B8C1CA"}}><StarIcon/></span>
            </div>
            
        </div>

        </>
    )
}