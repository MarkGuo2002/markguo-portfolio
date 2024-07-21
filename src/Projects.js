import CardProject from "./CardProject";
import messenger from "./assets/messenger.png"
import gameengine from "./assets/game-engine-demo.gif"
import mytv from "./assets/mytv.png"
import digitaltwin from "./assets/digitaltwin.png"
import ablog from "./assets/ablog.png"

const projects = [
    {
        "image": messenger,
        "title":"C Messenger",
        "description":"Messenger's backend is C-based with a Singly Linked List, providing a proxy to the frontend which is Python-based with Tkinter, communicating via sockets.",
        "date":"May 2023",
        "tags": ["C", "Python", "TKinter", "Sockets", "Data Structure", "Client-Server"]
    },
    {
        "image": gameengine,
        "title":"C++ Simple FPS Game Engine",
        "description":"A simple game engine developed using ASCII Characters, applying Game Dev techniques such as Ray Casting. The engine is capable of rendering a user predifined map.",
        "date":"Feb 2023",
        "tags": ["C++", "Game Dev", "Ray Casting", "ASCII", "Linear Algebra"]
    },
    {
        "image": mytv,
        "title":"MyTV",
        "description":"Web application that allows users to control the application from their phone, using sockets to communicate with the server. Developed in Node.js, using Express.js, and Socket.io. Frontend developed in HTML/CSS and JavaScript.",
        "date":"Jan 2023",
        "tags": ["Express.js", "Node.js", "Socket.io", "HTML/CSS", "JavaScript"]
    },
    {
        "image": digitaltwin,
        "title":"Digital Twin of a Vehicle",
        "description":"The project creates a Python-based digital twin of a vehicle that communicates with a message router via MQTT, enabling API calls to microservices like telemetry logging and vehicle management. Components are containerized with Docker and orchestrated using Docker Compose.",
        "date":"May 2024", 
        "tags": ["Python", "REST API", "Microservices", "Docker", "MQTT", "PostMan"]
    },
    {
        "image": ablog,
        "title":"Ablog",
        "description":"A blog application developed in Python using Flask, SQLAlchemy, and SQLite. The application allows users to create, read, update, and delete posts.",
        "date":"July 2024",
        "tags": ["React", "TailwindCSS", "AWS", "PotgreSQL", "JWT", "REST", "Terraform", "Docker"]
    }



]




const Projects = () => {
    const projectsContainer = projects.map((item, index) => {
        return(
            <CardProject
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                date={item.date}
                taglist={item.tags}
            />
        )
    })

    return (
        <div className="flex flex-col items-center py-12">
            <h1>Projects</h1>
            <p className=" text-gray-500 italic">Not enough? I’m open to challenges, just contact me via email.</p>
            <div className=" projects-container w-full my-4 flex flex-col gap-8 justify-center items-center">
                {projectsContainer}
            </div>
        </div>
    );
}

export default Projects;