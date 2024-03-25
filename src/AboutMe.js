import profilePhoto from './assets/profile.png';
import './AboutMe.css';
import "./Tools.css";
import Tag from './Tag';

function AboutMe() {
  return (
    <div>
    <section className="section" id="About Me" data-aos="fade-right" data-aos-once="true">
        <div className='title'>About me!</div>
        <div className="aboutme-container columns">
            <div className="column is-one-quarter profile-container" data-aos="fade-right" data-aos-once="true" data-aos-delay="150">
              <img className="profile-image" src={profilePhoto} alt='hello world' />
              <div>
                <p> 
                  <em>fourth-year student in Computer Science Student 
                  at UC3M Madrid<br></br>
                  Currently working as Operations/Systems Engineer at <strong>Satec_</strong></em>
                </p>
              </div>
            </div>
            <div className="column column-padding" data-aos="fade-right" data-aos-once="true" data-aos-delay="300">
              <div className='mini-section'>
                <div className='mini-section-title'>Education</div>
                <p><strong>2011 - 2020: </strong>Nuestra Señora del Carmen Indautxu de Bilbao</p>
                <p><strong>2020 - 2024: </strong> Universidad Carlos III de Madrid (UC3M) - Computer Science</p>
              </div>
              <div className='mini-section'>
                <div className='mini-section-title'>Work Experience</div>
                <p><strong>2023 oct - now:</strong> Sistemas Avanzados de Tecnología S.A. (Satec_)</p>
                
              </div>
              <div className='mini-section'>
                <div className='mini-section-title'>Tech Stack</div>
                <div className="tags-container">
                  <Tag text="C" />
                  <Tag text="JavaScript" />
                  <Tag text="HTML/CSS" />
                  <Tag text="React" />
                  <Tag text="Node.js" />
                  <Tag text="MongoDB" />
                  <Tag text="SQL" />
                  <Tag text="Git" />
                  <Tag text="Terraform" />
                  <Tag text="Ansible" />
                  <Tag text="Linux" />
                </div>
              </div>
            </div>
        </div>
    </section>
    </div>
  );
}


export default AboutMe;