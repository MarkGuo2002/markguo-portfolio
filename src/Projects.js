import CardProject from "./CardProject";


const Projects = () => {

    return (
        <div className="flex flex-col items-center py-12">
            <h1>Projects</h1>
            <p className=" text-gray-500 italic">Not enough? I’m open to challenges, just contact me via email.</p>
            <div className=" px-32 projects-container w-full my-4 flex justify-center">
            <CardProject />
                
            </div>
        </div>
    );
}

export default Projects;