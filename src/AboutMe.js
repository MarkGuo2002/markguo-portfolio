import guiana from './assets/french-guiana.png';
import china from './assets/china.png';
import spain from './assets/spain.png';
import scratch from './assets/scratch.png';
import uc3m from './assets/uc3m.png';
import satec from './assets/satec.png';
import graduate from './assets/graduate.png';


let timeline = [
    {
        'year':'2002',
        'event': 'I was born in French Guiana',
        'image': guiana
    },
    {
        'year':'2004',
        'event': 'I moved to China to live with my grandpa',
        'image': china
    },
    {
        'year':'2011',
        'event': 'I moved to Spain to live with my parents',
        'image': spain
    },
    {
        'year':'2014',
        'event': 'My IT teacher introduced me to Scratch and Arduino. And that was the moment when I decided to pursue a CS career.',
        'image': scratch
    },
    {
        'year':'2020',
        'event': 'I started my Computer Science career at Universidad Carlos III de Madrid (UC3M) in a bilingual program',
        'image': uc3m
    },
    {
        'year':'2023',
        'event': 'I started my first job as a Cloud & Cybersecurity Assistant at SATEC, where I learn a lot about automation,    cloud fundamentals and enterprise security practices',
        'image': satec
    },
    {
        'year':'2024',
        'event': 'I finished my interships in May and succesfully graduated from UC3M.',
        'image': graduate
    }
]

const AboutMe = () => {
    const timelineContainer = timeline.map((item, index) => {
        return(
            <Timeline
                key={index}
                year={item.year}
                event={item.event}
                image={item.image}
                last={index === timeline.length - 1} 
            />
        )
    })   
    return (
        <div className="flex flex-col items-center py-12">
            <h1>About Me</h1>
            <p className=" text-gray-500">Let me tell the story once again...</p>
            <p className=" text-gray-300 italic">Try hovering through the timeline ;)</p>
            <div className="timeline-container w-full my-4">
                {timelineContainer}
                
            </div>
        </div>
    );
    }



const Timeline = ( {year, event, last=false, image} ) => {
    return (
        <div>
            <div className="flex items-center w-full group">
                <div className="date-container p-2 w-1/12 bg-hoverGray border-2 border-darkgray rounded-xl flex items-center justify-center text-primary font-semibold group-hover:scale-125 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500 ease-out"> {year} </div>
                <div className="box-connectors opacity-100 h-1 w-20 bg-boxBgGray group-hover:opacity-0 transition-all duration-100"></div>
                <div className="event-container p-2 bg-hoverGray border-2 border-darkgray rounded-xl w-8/12 group-hover:translate-x-4 transition-all duration-500"> {event} </div>
                <div className="image-container w-20 ml-4 -translate-x-20 opacity-0
                group-hover:opacity-100 group-hover:translate-x-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-in-out" >
                    <img src={image} className="rounded-xl"/>
                </div>
            </div>
            {!last && (
                <div className="relative left-1/2 w-px h-8 my-1 bg-gray-300 border-dotted border-l-2"></div>
            )}
        </div>
    );
    }


export default AboutMe;