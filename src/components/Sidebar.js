import React from "react";

/* Navigationbar with icons which is fixed on the left side of each page (except Login & Registration) */
function Sidebar() {

  return (
    <aside className="sidebar">
      <div className="icons">

      <div className="icon-container">
        <a href="home">
          <span className="material-icons">home</span>
          <p>Startseite</p>
        </a>
      </div>
      
      <div className="icon-container">
        <a href="my-profile">
          <span className="material-icons">account_circle</span>
          <p>Mein Profil</p>
        </a>
      </div>


      <div className="icon-container">
        <a href="search-user">
          <span className=" material-icons">map</span>
          <p>User suchen</p>
        </a>
      </div>

      <div className="icon-container">
        <a href="chats">
          <span className="material-icons">forum</span>
          <p>Chats</p>
        </a>
      </div>

      <div className="icon-container ">
        <a href="help-finances">
          <span className="material-icons">contact_support</span>
          <p>Hilfe & Finanzen</p>
        </a>
      </div>

      <div className="icon-container ">
        <a href="settings">
          <span className="material-icons">settings</span>
          <p>Einstellungen</p>
        </a>
      </div>

      <div className="icon-container ">
        <a href="logout">
          <span className="material-icons">logout</span>
          <p>Abmelden</p>
        </a>
      </div>
    </div>
  </aside>
  );
}
 
export default Sidebar;