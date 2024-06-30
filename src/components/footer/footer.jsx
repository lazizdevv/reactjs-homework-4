import icons from "../../assets/icons.png"
 
export const Footer = () =>{
    return(
        <>
        <div className="container">
            <div className="flex justify-center md:justify-between align-middle flex-wrap gap-3 py-7 border-t">
                <div className=""><h1 className="text-primary italic text-base font-normal leading-relaxed tracking-normal text-left">2016–2021 © ООО «ПД Реснота»</h1></div>
                <div className="cursor-pointer"><img src={icons} alt="" /></div>
                <div className=""><h1 className="text-primary italic text-base font-normal leading-relaxed tracking-normal text-center lg:text-left">Разработка и продвижение сайта — SEOabsolut</h1></div>
            </div>
        </div>
        </>
    )
}