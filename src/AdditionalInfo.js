import Tag from "./Tag";
import ProgressBar from "./ProgressBar";
import { FaCloud, FaConnectdevelop, FaDev, FaDumbbell, FaMountain, FaPlane, FaRunning, FaShieldAlt, FaUserFriends, FaMusic, FaFile } from "react-icons/fa";

const skillsData = [
    { text: "React", mastery: 75 },
    { text: "Node.js", mastery: 65 },
    { text: "Git", mastery: 55 },
    { text: "Tailwind", mastery: 60 },
    { text: "MongoDB", mastery: 50 },
    { text: "PostgreSQL", mastery: 65 },
    { text: "Docker", mastery: 65 },
    { text: "Terraform", mastery: 50 },
    { text: "Ansible", mastery: 50 },
    { text: "AWS", mastery: 65 },
    { text: "Python", mastery: 90 },
    { text: "Javascript", mastery: 75 },
    { text: "C", mastery: 85 },
    { text: "C#", mastery: 25 },
    { text: "C++", mastery: 25 },
    { text: "Linux", mastery: 80 },
    { text: "Servers", mastery: 50 },
    { text: "Bash", mastery: 40 },
];


const AdditionalInfo = () => {
    return (
        <div id="skills" className="flex flex-wrap gap-4 justify-center items-stretch">
            <MyInterests />
            <MyHobbies />
            <MySkills />
        </div>

    );
    }



const MyInterests = () => {
    return (
        <div className="w-[20rem]  rounded-xl border-darkgray border-[1px] p-4 bg-hoverGray flex flex-col items-center">
           <h3 className="text-primary">My Interests</h3>
            <div className="flex flex-wrap items-center justify-center gap-5 mt-6">
            <Tag text="Cloud Solutions" color="myyellow" icon={ <FaCloud size={"1rem"}/>}/>
            <Tag text="Cybersecurity" color="myblue" icon={ <FaShieldAlt size={"1rem"} /> } />
            <Tag text="Software Development" color="mygreen" icon={ <FaDev size={"1rem"}/>} />
            <Tag text="Distributed Systems" color="primary" icon={ <FaConnectdevelop size={"1rem"}/>} />
            <Tag text="Interpersonal Skills" color="myyellow" icon={ <FaUserFriends size={"1rem"}/>} />
            </div>  
        </div>
    );
    }

const MyHobbies = () => {
    return (
        <div className="w-[20rem] rounded-xl border-darkgray border-[1px] p-4 bg-hoverGray flex-col flex items-center">
           <h3 className="text-primary">My Hobbies</h3>
            <div className="flex flex-wrap items-center justify-center gap-5 mt-6">
            <Tag text="Music making" color="myblue" icon={ <FaMusic size={"1rem"}/>} />
            <Tag text="Blogging" color="myyellow" icon={ <FaFile size={"1rem"}/>} />
            <Tag text="Gym" color="mygreen" icon={ <FaDumbbell size={"1rem"}/>}  />
            <Tag text="Sport" color="primary" icon={ <FaRunning size={"1rem"}/>} />
            <Tag text="Hiking" color="mygreen" icon={ <FaMountain size={"1rem"}/>} />
            <Tag text="Travelling" color="myyblue" icon={ <FaPlane size={"1rem"}/>} />

            </div>  
        </div>
    );
    }

const MySkills = () => {
    const skillsContainer = skillsData.map((skill, index) => {
        return (
            <ProgressBar text={skill.text} progress={skill.mastery} key={index} /> 
        )
    })
    return (
        <div className="w-[20rem] h-fit rounded-xl border-darkgray border-[1px] py-4 px-8 bg-hoverGray flex-col flex items-center">
        <h3 className="text-primary">My Skills</h3>
            <div className=" skills-container w-full flex flex-col gap-1 mt-6">
                {skillsContainer}

            </div>  
        </div>
    );
    }


export default AdditionalInfo;

