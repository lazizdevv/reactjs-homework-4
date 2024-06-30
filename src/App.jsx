import React from "react";
// data
import { products} from "./data/product";
// components
import { Navbar } from "./components/navbar";
import { Header } from "./components/header";
import { productsMain} from "./data/product-main";
import { ProductsMain} from "./components/product-main";
import { Footer } from "./components/footer";
import {Carousel } from './components/carousel';

export default function App() {
    return (
        <>
        <nav><Navbar/></nav>
        <header><Header/></header>

        <main>
          <section className="container">
          <div className="flex flex-wrap">
      {productsMain.map((card, index) => {
    
        let widthClass;
        if (index % 5 < 3) { widthClass = 'lg:w-1/3 md:w-1/2 w-full';} 
        else { widthClass = 'lg:w-1/2 md:w-1/2 w-full';}

        return (
          <div key={index} className={`${widthClass} p-2`}><ProductsMain {...card} /></div>
        );
      })}
    </div>
          </section>

          <section className="mb-16">
            <div className="container flex justify-center gap-1 mt-20 mb-12">
              <button className="py-3 border px-7 text-primary font-times font-normal text-xl italic">Хиты</button>
              <button className="py-3 border px-7 text-primary font-times font-normal text-xl italic">Скидки</button>
              <button className="py-3 border px-7 text-primary font-times font-normal text-xl italic">Новинки</button>
            </div>
            <Carousel products={products}  />
          </section>
        </main>

        <footer> <Footer/></footer>
        </>
    )
  }