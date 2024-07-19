import guiana from './assets/french-guiana.png';
const AboutMe = () => {
    return (
        <div className="flex flex-col items-center py-12">
            <h1>About Me</h1>
            <p className=" text-gray-500">Let me tell the story once again...</p>
            <div className="timeline-container w-full my-4">
                <Timeline />
            </div>
        </div>
    );
    }



const Timeline = ( {year, event, last=false} ) => {
    return (
        <div>
            <div className="flex items-center w-full">
                <div className="date-container p-2 bg-darkgray rounded-xl"> 2002 </div>
                <div className="box-connectors h-1 w-20 bg-boxBgGray"></div>
                <div className="event-container p-2 bg-boxBgGray rounded-xl w-5/6"> I was born in French Guiana </div>
                <div className="image-container w-1/12">
                    <img src={guiana} className="rounded-xl"/>
                </div>
            </div>
            <div className="vertical-connector h-20 w-0 border-darkgray border-2 divide-dotted"></div>
        </div>
    );
    }


export default AboutMe;