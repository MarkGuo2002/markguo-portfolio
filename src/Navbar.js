import "./Navbar.css";
import logo from "./assets/logo-markguo-removebg.png";

function Navbar(){
    const navbarElements = ["About Me", "Publications", "Projects", "Contacts"];
    
    const scrollToSection = (sectionId, options) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ ...options });
      };
    
      const navbarList = navbarElements.map((element) => (
        <a  className="navbar-item custum-navbar-item is-size-6" 
            key={element}
            onClick={() => 
                scrollToSection(element.toLowerCase(),
                {
                    offset: -200,
                    behavior: "smooth",
                }
        )}>
          {element}
        </a>
      ));

    return (
    <div>
        <div className="navbar" role="navigation">
            <div className="navbar-brand">
                <a class="navbar-item" href="https://www.linkedin.com/in/mark-guo-620512196/">
                    <img src={logo} width="112" height="28"/>
                </a>
            </div>
            {navbarList}
        </div>
    </div>
    );
}

export default Navbar;