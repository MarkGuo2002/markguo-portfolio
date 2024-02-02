const scrollToSection = (sectionId, options) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ ...options });
  };

function NavbarOption(props) {
  return (
    <a
            className="navbar-item custum-navbar-item is-size-6"
            onClick={() =>
              scrollToSection(props.text, {
                offset: -200,
                behavior: "smooth",
              })
            }
    >
    {props.text}
    </a>
  );
}

export default NavbarOption;