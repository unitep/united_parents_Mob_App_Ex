import React from "react";

function Header() {

    return (
        <header>            
            <div className="header-title">
                <p>United Parents</p>
            </div>

            {/* TO DO: add function to change language */}
            <div className="change-language">
                <a href="#">DE | EN</a>
            </div>
        </header>
    );
}

export default Header;