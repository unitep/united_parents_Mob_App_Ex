import React from "react";

function MyProfile() {
    return (
        <div>
            {/* TO DO:
                * get all the specific user info from the DB
              */}
            <div className="content-box profile">
                <div className="profile-img">
                    <img className="circle-img" src="https://i.pravatar.cc/200"></img>
                </div>
                <div className="profile-info">
                    <h1>Benutzername</h1>
                    <h2><strong>Alter: </strong>22</h2>
                    <h2><strong>Hochschule: </strong>Frankfurt University of Applied Sciences</h2>
                    <h2><strong>Studiengang: </strong>International Business</h2>
                    <h2><strong>Kind(er): </strong>1</h2>
                    <h2><strong>Alter: </strong>2</h2>
                </div>
            </div>

            <div className="content-box about-me">
                <h1>Über mich:</h1>
                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                    pellentesque eu, pretium.</h2>
            </div>

            {/* TO DO: implement week calendar */}
        </div>
    );
}

export default MyProfile;