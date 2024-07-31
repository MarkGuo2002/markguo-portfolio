import { FaAngleDoubleDown } from "react-icons/fa";
import hellokitty from "./images/hellokitty.gif";
import flower from "./images/flower.gif";
import bb from "./images/bb.jpg";



export default function Hero() {
    return(
        <div className="hero-container text-center px-8 lg:px-28 py-12 lg:py-40 flex items-center flex-col relative">
            <div data-aos="fade-right" data-aos-delay="300" className="image-container absolute left-0">
                <img src={flower} alt="flower" className="absolute z-10 -rotate-12 -top-1 opacity-60" />
                <img src={bb} alt="Ling" className="z-0 w-14 h-14 lg:w-28 lg:h-28 -rotate-12 rounded-full border-2 border-white shadow-lg bg-contain"/>
            </div>
            <div data-aos="fade-left" data-aos-delay="500" className="gif-container absolute right-0">
                <img src={hellokitty} alt="hk" className="z-0 w-14 h-14 lg:w-40 lg:h-40 rotate-12 bg-contain"/>
            </div>

            <h1 data-aos="fade-down" className="text-xl lg:text-6xl"> ✨Hi my babyling✨<br></br>
                Welcome to our<br></br>
                <span className="text-primary">🎀1st Anniversary Webpage💋</span><br></br>
                (●◡●)
            </h1>
            < FaAngleDoubleDown data-aos="fade-down" data-aos-delay="700" className="text-2xl text-primary animate-bounce my-20 lg:my-48"/>
            
        </div>
    )

}