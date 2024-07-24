const Timeline = ( {year, event, last=false, image} ) => {
    return (
        <div className='flex group' data-aos="fade-down" data-aos-offset="10">
            <div className="flex w-fit relative items-center">
                <div className="vertical-line h-full w-1 bg-boxBgGray"></div>
                <div className="z-10 p-2 border-[1px] border-boxBgGray bg-white rounded-full absolute top-1/2 transform -translate-y-[40%] -translate-x-[38%]
                                brightness-100 group-hover:font-extrabold group-hover:text-primary group-hover:p-3 group-hover:brightness-90 transition-all duration-500 ease-in-out">{year}</div>
                <div className=" z-0 h-1 w-20 bg-boxBgGray absolute top-1/2"></div>
                {/* <div className="absolute top-1/2 flex items-center">
                </div> */}
            </div>
            <div className="flex w-full relative my-6 ml-12 items-center">
                <div className=" z-10 event-container py-2 pl-4 pr-16 bg-white border-2 border-boxBgGray rounded-xl w-full group-hover:translate-x-4 group-hover:brightness-90 transition-all duration-500">
                    
                    {event}
                </div>
                <div className="z-20 absolute right-0 image-container w-20 ml-4 translate-x-0 opacity-20
                 group-hover:opacity-60 group-hover:translate-x-2/4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-in-out" >
                    <img src={image} alt="event-img" className="rounded-xl z-10"/>
                </div>
            </div>
        </div>
    );
    }

    export default Timeline;