import { FaRegCalendarAlt } from "react-icons/fa";
import messenger from "./assets/messenger.png"
import Tag from "./Tag";

const CardProject = () =>{
    return(
        <>
        <div className="relative flex cursor-pointer card-container w-full bg-hoverGray rounded-xl border-[1px] py-12 border-darkgray sm:h-fit lg:h-96 shadow-inner overflow-hidden group hover:shadow-primary hover:brightness-95 transition-all duration-500">

        <div className="px-4 py-2 bg-primary right-0 bottom-0 absolute rounded-tl-xl rounded-br-xl text-white font-semibold drop-shadow-md
                        opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out"> Learn more → </div>
            
            <img src={messenger} className="relative right-24 top-12 w-6/12 h-fit object-cover group-gover rounded-xl shadow-2xl
                                            group-hover:translate-x-12 group-hover:-translate-y-4 group-hover:rotate-3 transition-all duration-500 ease-in-out" />
            
            <div className="w-6/12 pr-12 description-container flex flex-col gap-2">
                <h3 className="text-primary">C Messenger</h3>
                <p>Messenger's backend is C-based with a Singly Linked List, providing a proxy to the frontend which is Python-based with Tkinter, communicating via sockets.</p>
                <div className="flex gap-2 items-center text-gray-600">
                    <FaRegCalendarAlt size={"1rem"}/>
                    <p>May 2023</p>
                </div>
                <div className="tag-container flex flex-wrap gap-2 w-full">
                    <Tag text={'C'}/>
                    <Tag text={'Python'}/>
                    <Tag text={'Tkinter'}/>
                    <Tag text={'Sockets'}/>
                    <Tag text={'Data structures'}/>
                    <Tag text={'Client-Server'}/>
                </div>
            </div>
        </div>
        </>
    );
}



export default CardProject;