import hero_bgi from './assets/mew2.jpg';
import "./Tools.css";
import './Hero.css'; // Import the CSS file for styling

function Hero() {
  return (
    <div className="hero">
      <div className="hero-overlay center">
        <div className="hero-content">
          <h1 className="title-hero center">Welcome to Mark Guo's personal website</h1>
          <h2 className="subtitle center">Cloud Technology, Software and Web Development</h2>
        </div>
      </div>
      <img id="hero-background-image" src={hero_bgi} alt="Hero Background" />
    </div>
  );
}

export default Hero;
