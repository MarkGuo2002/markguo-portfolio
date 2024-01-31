import profilePhoto from './assets/profile.png';
//import './AboutMe.css';
import "./Tools.css";


function AboutMe() {
  return (
    <section className="section" id="about me" data-aos="fade-right">
      <div className="content is-normal">
        <h1>About me!</h1>
        <div className="aboutme-container">
            <div className="left content is-normal">
              <img className="rounded-image" src={profilePhoto} />

            </div>
        </div>
        
      </div>
    </section>
  );
}


export default AboutMe;