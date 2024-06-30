import headerbg from "../../assets/header-bg.png";

export const Header = () => {
  return (
    <>
      <section
        className="lg:w-full h-[640px] bg-cover bg-left lg:bg-center  bg-no-repeat mx-auto"
        style={{ backgroundImage: `url(${headerbg})` }}
      >
        <div className="container relative">
          <div className="absolute top-28 left-10 right-2">
            <h1 className="text-white text-[56px] font-bold">Истина в качестве</h1>
            <p className="text-white font-times italic text-xl font-normal w-[350px] leading-[130%] text-left mt-6">
              КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
              КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ,
              ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ
            </p>

            <button className="px-12 py-3 bg-primary text-white font-times text-xl font-normal mt-7">Купить</button>
          </div>
        </div>
      </section>
    </>
  );
};
