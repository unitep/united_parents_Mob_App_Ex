import React from "react";

/**
 * TO DO: 
 * get input PLZ, search it in the DB and present result
 * implement API for the radius
 *
 */

function SearchUser() {
    /* Prevent that users can enter more than 5 digits */
    const handleInput = (e) => {
        let maxLength = 5;
        if (e.target.value.length > maxLength) {
            e.target.value = e
                .target
                .value
                .slice(0, maxLength);
        }
    }

    return (
        <div>
            <div className="search-zip-container">
                <form id="zip-code">
                    <input
                        type="number"
                        onInput={handleInput}
                        placeholder="Postleitzahl"
                        className="zip-input"></input>

                    <input
                        list="radius"
                        name="Radius"
                        placeholder="Radius"
                        className="search-radius"></input>

                    <datalist id="radius">
                        <option value="0km"></option>
                        <option value="2km"></option>
                        <option value="5km"></option>
                    </datalist>

                    <button className="zip-button">Suchen</button>
                </form>

                {/*
                TO DO:
                * Move the result list in onSubmit function,
                so that it only shows after clicking on the serach button.
                * Handle output if there are no results!
                * Also handle onClick:
                    * profile image: link to user profile
                    * send message button: link to user chat
                 */}

                {/* Show this only, if there are no results */}
                <div className="content-box no-results">
                    <h1>Keinen User gefunden!</h1>
                    <p>Ändere den Suchradius oder gib eine andere PLZ ein.</p>
                </div>

                {/* Show this depending on the existing number of results */}
                <div className="zip-result-row">
                    <div className="column">
                        <div className="zip-result-card">
                            {/* Catch corresponding user profile image from DB
                            and link user to the corresponding user profile on click on the image
                         */}
                            <img className="circle-img" src="https://i.pravatar.cc/200"></img>
                            {/* Catch corresponding user full name from DB  */}
                            <h1>Vorname Nachname</h1>
                            {/* Catch corresponding user ZIP code from DB  */}
                            <p>Postleitzahl Stadt</p>
                            {/* Link user to chat page with correspondinh user */}
                            <button className="send-msg-btn">
                                <span className="material-icons">forum</span>
                            </button>
                        </div>
                    </div>
                    
                    <div className="column">
                        <div className="zip-result-card">
                            <img className="circle-img" src="https://i.pravatar.cc/200"></img>
                            <h1>Vorname Nachname</h1>
                            <p>Postleitzahl Stadt</p>
                            <button className="send-msg-btn">
                                <span className="material-icons">forum</span>
                            </button>
                        </div>
                    </div>

                    <div class="column">
                        <div className="zip-result-card">
                            <img className="circle-img" src="https://i.pravatar.cc/200"></img>
                            <h1>Vorname Nachname</h1>
                            <p>Postleitzahl Stadt</p>
                            <button className="send-msg-btn">
                                <span className="material-icons">forum</span>
                            </button>
                        </div>
                    </div>

                    <div class="column">
                        <div className="zip-result-card">
                            <img className="circle-img" src="https://i.pravatar.cc/200"></img>
                            <h1>Vorname Nachname</h1>
                            <p>Postleitzahl Stadt</p>
                            <button className="send-msg-btn">
                                <span className="material-icons">forum</span>
                            </button>
                        </div>
                    </div>

                    <div class="column">
                        <div className="zip-result-card">
                            <img className="circle-img" src="https://i.pravatar.cc/200"></img>
                            <h1>Vorname Nachname</h1>
                            <p>Postleitzahl Stadt</p>
                            <button className="send-msg-btn">
                                <span className="material-icons">forum</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchUser;