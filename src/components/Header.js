import React from "react";

/* ----- Header which is fixed at the top of each page ----- */
/* TODO: implement option to choose languages: German or English */

function Header() {
    return ( 
    <header>
    <div className="header-title">
      United Parents
      <a href="" className="change-language">DE | EN</a>
    </div>
  </header>
    );
}

export default Header;