import "./Navbar.css";
import logo from "./assets/logo-markguo-removebg.png";
import NavbarOption from "./NavbarOption";

function Navbar(props) {

  
    return (
      <div>
        <div className="navbar" role="navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://www.linkedin.com/in/mark-guo-620512196/">
              <img src={logo} width="112" height="28" alt="LinkedIn Logo" />
            </a>
          </div>
          
        {props.render && (
        <>
          <NavbarOption text="About Me" />
          <NavbarOption text="Projects" />
          <NavbarOption text="Contacts" />
        </>
        )}
        </div>
      </div>
    );
  }
  

export default Navbar;