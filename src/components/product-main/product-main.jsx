import React from "react";

export const ProductsMain = ({ bg,img,title,name }) => {
    return(
        <div className="card p-4 border rounded shadow relative  h-[260px]" style={{background:bg}}>
            <div className="absolute top-14 z-20">
                <h1 className="w-56 text-white font-libre text-[26px] font-bold text-left leading-8">{name}</h1>
                <h1 className="w-56 text-white font-times italic text-base font-normal leading-[120%] tracking-normal text-left">{title}</h1>
            </div>
            
            <img src={img} alt="img" className="absolute right-0 bottom-0"/>                
        </div>
    )
};