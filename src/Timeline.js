const Timeline = ( {year, event, last=false, image} ) => {
    return (
        <div className='flex flex-col gap-2'>
            <div className="flex items-center w-full group relative">
                <div className="date-container p-2 w-1/12 bg-hoverGray border-2 border-darkgray rounded-xl flex items-center justify-center text-primary font-semibold group-hover:scale-125 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500 ease-out">
                    {year}
                </div>
                <div className="box-connectors opacity-100 h-1 w-20 bg-boxBgGray group-hover:opacity-0 transition-all duration-100"></div>
                <div className=" z-10 event-container py-2 px-4 bg-hoverGray border-2 border-darkgray rounded-xl w-9/12 group-hover:translate-x-4 group-hover:brightness-90 transition-all duration-500">
                    {event}
                </div>
                <div className="z-20 absolute right-0 image-container w-20 ml-4 translate-x-0 opacity-40
                 group-hover:opacity-100 group-hover:translate-x-2/4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-in-out" >
                    <img src={image} className="rounded-xl"/>
                </div>
            </div>
            {!last && (
                <div className="relative left-1/2 w-px h-8 my-1 bg-gray-300 border-dotted border-l-2"></div>
            )}
        </div>
    );
    }

    export default Timeline;