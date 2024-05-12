import React from "react";

function Header() {
  const scrollToSection = (section) => {
    // Find the section element with the word "tester"
    const goToSection = document.getElementById(section);
    // Scroll to the top of the testerSection
    goToSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      offsetTop: 20,
    });
  };

  return (
    <div className="navigation">
      <div className="nav-header container-padding">
        <div className="justify-right">
          <span
            className=" indiv-header"
            onClick={() => scrollToSection("home")}
          >
            HOME
          </span>
          <span
            className=" indiv-header"
            onClick={() => scrollToSection("authors")}
          >
            AUTHORS
          </span>
          <span
            className=" indiv-header"
            onClick={() => scrollToSection("transcribe")}
          >
            TRANSCRIBE
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
