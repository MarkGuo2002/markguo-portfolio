function GoTopButton(){
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

    return(
        <button className="button is-light is-danger is-outlined"
                onClick={scrollToTop}
                style={{position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        opacity: "50%"}}>

                  Go to Top</button>
    )
}

export default GoTopButton;