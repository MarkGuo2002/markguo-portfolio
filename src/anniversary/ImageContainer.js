

export default function ImageContainer ({ image, isSlider = false, decoration = null, isLeft = true, caption = null }) {
    const position = isLeft ? "-left-8 -rotate-12" : "-right-8 rotate-12";
    const size = isSlider ? "w-40 lg:w-56" : "w-56 lg:w-96";
    const decorativeSize = isSlider ? "w-20 lg:w-24" : "w-36";


    return (
        <div data-aos="fade-down" className={`${size} image-container relative flex-shrink-0`} >
            <img
                className="w-full h-auto object-cover rounded-3xl shadow-xl"
                loading="lazy"
                src={image}
                alt="Best Gift" />
            
            {decoration && <img className={`${position} ${decorativeSize} decorative-img rounded-full h-auto absolute -top-8`} loading="lazy" src={decoration} alt='hasdf' />}
            {caption && <p className="text-center text-base font-medium italic py-2 text-zinc-700">{caption}</p>}
                
        </div>
    )
}