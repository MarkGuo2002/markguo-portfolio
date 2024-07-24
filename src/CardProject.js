import { FaRegCalendarAlt } from "react-icons/fa";

import Tag from "./Tag";

const CardProject = ( {image, title, description, date, taglist} ) =>{
    const tagsContainer = taglist.map((item) => (
        <Tag text={item} />
    ))
    return(
        <>
        <div data-aos="fade-down" className="relative flex items-center cursor-pointer card-container max-w-[52rem] bg-hoverGray rounded-xl border-[1px] py-2  border-darkgray h-fit shadow-inner overflow-hidden group hover:shadow-primary hover:brightness-95 transition-all duration-500">

        <div className="px-4 py-2 bg-primary right-0 bottom-0 absolute rounded-tl-xl rounded-br-xl text-white font-semibold drop-shadow-md
                        opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out"> More info is not available yet → </div>
            
            <img src={image} alt="project-card" className="hidden lg:block relative right-24 top-12 w-6/12 h-fit object-cover group-gover rounded-xl all-directions-shadow
                                            group-hover:translate-x-12 group-hover:-translate-y-4 group-hover:rotate-3 transition-all duration-500 ease-in-out" />
            
            <div className="w-full lg:w-6/12 p-6 lg:pr-12 description-container flex flex-col gap-2">
                <h3 className="text-primary">{title}</h3>
                <p>{description}</p>
                <div className="flex gap-2 items-center text-gray-600">
                    <FaRegCalendarAlt size={"1rem"}/>
                    <p>{date}</p>
                </div>
                <div className="tag-container flex flex-wrap gap-2 w-full">
                    {tagsContainer}
    
                </div>
            </div>
        </div>
        </>
    );
}



export default CardProject;