import ProjectCard from "./ProjectCard";
import MyTvImg from "./assets/mytv.png";
import MessengerImg from "./assets/messenger.png";
import GameEngineDemo from "./assets/game-engine-demo.gif";
//import GameEngineMap from "./assets/game-engine-map.png";
let MyTv=
    {
        image: MyTvImg,
        title: "MyTv",
        content: "Web application that allows users to control the application from their phone, using sockets to communicate with the server. Developed in Node.js, using Express.js, and Socket.io. Frontend developed in HTML/CSS and JavaScript.",
        tags: ["Node.js", "JavaScript", "HTML/CSS", "Express.js", "Socket.io"],
        githubLink:"https://github.com/MarkGuo2002/SIU_ProyectoFinal-MyTv"
    }
let messenger=
{
    image: MessengerImg,
    title: "C Messenger",
    content: "Messenger's backend is C-based with a Singly Linked List, providing a proxy to the frontend which is Python-based with Tkinter, communicating via sockets.",
    tags: ["C", "Python", "Tkinter", "Sockets", "Singly linked list"],
    githubLink:"https://github.com/MarkGuo2002/DistribuidosTF-Messenger"
}

let gameEngine=
{
    image: GameEngineDemo,
    title: "C++ Simple FPS Game Engine",
    content: "A simple game engine developed using ASCII Characters, applying Game Dev techniques such as Ray Casting. The engine is capable of rendering a user predifined map.",
    tags: ["C++", "Game Engine", "Linear Algebra"],
    githubLink:""
}




function Projects() {
    return (
    <div>
      <section className="section" id="Projects" data-aos="fade-right" data-aos-once="true">
        
          <div className='title'>Projects</div>
            <div className="columns">
                <div className="column" data-aos="fade-right" data-aos-once="true" data-aos-delay="150">
                    <ProjectCard
                    image={MyTv.image}
                    title={MyTv.title}
                    content={MyTv.content}
                    tags={MyTv.tags}
                    githubLink={MyTv.githubLink}/>
                </div>
                <div className="column" data-aos="fade-right" data-aos-once="true" data-aos-delay="300">
                <ProjectCard
                    image={messenger.image}
                    title={messenger.title}
                    content={messenger.content}
                    tags={messenger.tags}
                    githubLink={messenger.githubLink}/>
                </div>
                <div className="column" data-aos="fade-right" data-aos-once="true" data-aos-delay="450">
                <ProjectCard
                    image={gameEngine.image}
                    title={gameEngine.title}
                    content={gameEngine.content}
                    tags={gameEngine.tags}
                    githubLink={gameEngine.githubLink}/>
                </div>

                
            </div>
      </section>
    </div>
    );
  }

export default Projects;