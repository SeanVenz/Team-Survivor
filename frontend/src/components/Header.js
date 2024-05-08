import React from "react";

function Header() {
  const scrollToTesterSection = () => {
    // Find the section element with the word "tester"
    const testerSection = document.getElementById("tester-section");
    // Scroll to the top of the testerSection
    testerSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navigation">
      <div className="nav-header container-padding">
        <div className="justify-right">
          <span onClick={scrollToTesterSection}>HOME</span>
          <span>ABOUT</span>
          <span>INSTRUCTION</span>
        </div>
        <button onClick={scrollToTesterSection}>TRANSCRIBE</button>
      </div>
    </div>
  );
}

export default Header;
