import React from "react";
// data
import { products } from "./data/product";
// components
import { Navbar } from "./components/navbar";
import { Header } from "./components/header";
import { productsMain } from "./data/product-main";
import { ProductsMain } from "./components/product-main";
import { Footer } from "./components/footer";
import { Carousel } from "./components/carousel";

export default function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <header>
        <Header />
      </header>

      <main>
        <div className="container">
          <div className="flex flex-wrap">
            {productsMain.map((card, index) => {
              let widthClass;
              if (index % 5 < 3) {
                widthClass = "lg:w-1/3 md:w-1/2 w-full";
              } else {
                widthClass = "lg:w-1/2 md:w-1/2 w-full";
              }

              return (
                <div key={index} className={`${widthClass} p-2`}>
                  <ProductsMain {...card} />
                </div>
              );
            })}
          </div>
        </div>

        <Carousel products={products} />
      </main>

      <footer>
        {" "}
        <Footer />
      </footer>
    </>
  );
}
