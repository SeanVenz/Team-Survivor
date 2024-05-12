import React from "react";

function Header() {
  const scrollToSection = (section) => {
    // Find the section element with the word "tester"
    const testerSection = document.getElementById(section);
    // Scroll to the top of the testerSection
    testerSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navigation">
      <div className="nav-header container-padding">
        <div className="justify-right">
          <span onClick={() => scrollToSection("home")}>HOME</span>
          <span onClick={() => scrollToSection("authors")}>AUTHORS</span>
          <span onClick={() => scrollToSection("transcribe")}>TRANSCRIBE</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
