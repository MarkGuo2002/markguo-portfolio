import guiana from './assets/french-guiana.png';
import china from './assets/china.png';
import spain from './assets/spain.png';
import scratch from './assets/scratch.png';
import uc3m from './assets/uc3m.png';
import satec from './assets/satec.png';
import graduate from './assets/graduate.png';

import Timeline from './Timeline';
import AdditionalInfo from './AdditionalInfo';


let timeline = [
    {
        'year':'2002',
        'event': 'I was born in French Guiana.',
        'image': guiana
    },
    {
        'year':'2004',
        'event': 'I moved to China to live with my grandpa.',
        'image': china
    },
    {
        'year':'2011',
        'event': 'I moved to Spain to live with my parents.',
        'image': spain
    },
    {
        'year':'2014',
        'event': 'My IT teacher introduced me to Scratch and Arduino. And that was the moment when I decided to pursue a CS career.',
        'image': scratch
    },
    {
        'year':'2020',
        'event': 'I started my Computer Science degree at Universidad Carlos III de Madrid (UC3M) in a bilingual program.',
        'image': uc3m
    },
    {
        'year':'2023',
        'event': 'I started my first job as a Cloud & Cybersecurity Assistant at SATEC, where I learnt a lot about automation, cloud fundamentals and enterprise security practices.',
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
        <div id="about" className="flex flex-col items-center py-12">
            <h1>About Me</h1>
            <p className=" text-gray-500">Let me tell the story once again...</p>
            <p className=" text-gray-300 italic">Try hovering through the timeline ;)</p>
            <div className="timeline-container w-full mt-4 mb-12">
                {timelineContainer}
                
            </div >
            <div className='w-full mt-12'>
                <AdditionalInfo />
            </div>

        </div>
    );
    }











export default AboutMe;