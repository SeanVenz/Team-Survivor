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
      <div className="navigation container-padding">
        <div>TEST</div>
        <button onClick={scrollToTesterSection}>TESAET</button>
      </div>
    </div>
  );
}

export default Header;
