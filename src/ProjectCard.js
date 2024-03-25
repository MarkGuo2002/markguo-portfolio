import Tag from "./Tag";
import './ProjectCard.css';
function ProjectCard(props) {
    for (let i = 0; i < props.tags.length; i++) {
      props.tags[i] = <Tag text={props.tags[i]} />;
    }

    return (
      <div className="custom-card">
        <div className="custom-card-image">
          <img src={props.image} alt="MyTv Screenshot" />
        </div>
      <div className="custom-content">
        <h2 className="custom-title">{props.title}</h2>
        <p className="custom-body">{props.content}</p>
        <div className="custom-tags">
          {props.tags}
        </div>
      </div>
    </div>
    );
  }

export default ProjectCard;