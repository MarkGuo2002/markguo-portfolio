import Tag from "./Tag";
function ProjectCard(props) {
    for (let i = 0; i < props.tags.length; i++) {
      props.tags[i] = <Tag text={props.tags[i]} />;
    }

    return (
      <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
        <div class="card" >
        <div class="card-image">
          <figure class="image is-4by3">
            <img src={props.image} alt="hello"></img>
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{props.title}</p>
            </div>
          </div>
      
          <div class="content">
            {props.content}

            <br></br><br></br>
            <div class="tags">
              {props.tags}
            </div>
          </div>
        </div>
      </div>
    </a>
    );
  }

export default ProjectCard;