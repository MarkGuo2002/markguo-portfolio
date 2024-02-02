import ProjectCard from "./ProjectCard";
import MyTvImg from "./assets/mytv.png";
let MyTv=
    {
        image: MyTvImg,
        title: "MyTv",
        content: "A simple web app that allows users to search for movies and TV shows. It uses the OMDB API to fetch the data. The app is built using React.js and is responsive.",
        tags: ["Node.js", "JavaScript", "HTML/CSS"],
        githubLink:"https://github.com/MarkGuo2002/SIU_ProyectoFinal"
    }
    




function Projects() {
    return (
    <div>
      <section className="section" id="Projects" data-aos="fade-right">
        
          <div className='title'>Projects</div>
            <div className="columns">
                <div className="column">
                    <ProjectCard
                    image={MyTv.image}
                    title={MyTv.title}
                    content={MyTv.content}
                    tags={MyTv.tags}
                    githubLink={MyTv.githubLink}/>
                </div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column"></div>
                
            </div>
      </section>
    </div>
    );
  }

export default Projects;