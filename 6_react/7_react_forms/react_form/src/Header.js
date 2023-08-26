import React from "react";
 const styledHeader = {
    textAlign: "center",
    fontFamily: "Tahoma, sans-serif"
}

const Header = () => {
  return (
    <header style={styledHeader}>
      <h1>Saucy Tango</h1>
      <p>Indulge in Saucy Tango's rich flavors and bold spices entice your taste buds to dance the night away.</p>
    </header>
  );
};

export default Header;