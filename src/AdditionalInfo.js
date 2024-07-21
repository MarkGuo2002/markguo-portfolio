import Tag from "./Tag";





const AdditionalInfo = () => {
    return (
        <div className="flex flex-wrap gap-4 items-center justify-center">
            <MyInterests />
            <MyHobbies />
            <MySkills />
        </div>

    );
    }



const MyInterests = () => {
    return (
        <div className="max-w-[20rem] h-96 rounded-xl border-darkgray border-[1px] p-4 bg-hoverGray flex flex-col items-center">
           <h3 className="text-primary">My Interests</h3>
            <div className="flex flex-wrap items-center justify-center gap-5 mt-6">
            <Tag text="Cloud Solutions" color="myyellow"/>
            <Tag text="Cybersecurity" color="myblue"/>
            <Tag text="Software Development" color="mygreen" />
            <Tag text="Distributed Systems" color="primary"/>
            <Tag text="Interpersonal Skills" color="myyellow"/>
            </div>  
        </div>
    );
    }

const MyHobbies = () => {
    return (
        <div className="max-w-[20rem] h-96 rounded-xl border-darkgray border-[1px] p-4 bg-hoverGray flex-col flex items-center">
           <h3 className="text-primary">My Hobbies</h3>
            <div className="flex flex-wrap items-center justify-center gap-5 mt-6">
            <Tag text="Music making" color="myblue"/>
            <Tag text="Blogging" color="myyellow"/>
            <Tag text="Gym" color="mygreen" />
            <Tag text="Sport" color="primary"/>
            <Tag text="Hiking" color="mygreen"/>
            <Tag text="Travelling" color="myyblue"/>

            </div>  
        </div>
    );
    }

const MySkills = () => {
    return (
        <div className="max-w-[20rem] h-96 rounded-xl border-darkgray border-[1px] p-4 bg-hoverGray flex-col flex items-center">
           <h3 className="text-primary">My Skills</h3>
            <div className="flex flex-wrap items-center justify-center gap-5 mt-6">
            <Tag text="Python" color="myblue"/>
            <Tag text="Java" color="myyellow"/>
            <Tag text="JavaScript" color="mygreen" />
            <Tag text="React" color="primary"/>
            </div>  
        </div>
    );
    }


export default AdditionalInfo;

