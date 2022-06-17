import React, { useState, useEffect } from "react";
import { database, auth } from "../Firebase";
import { uid } from  "uid";
import { set, ref, onValue } from "firebase/database";


function Chats() {

    const username = auth.currentUser.email;

    const [msg, sendMsg] = useState ("");
    const [msgs1, sendMsgsByUser] = useState([]);
    const [msgs2, sendMsgsByPartner] = useState([]);

    const handleSubmit = (e) => {
        sendMsg(e.target.value);
    };
      
    // read

    useEffect(() => {
        onValue(ref(database), (snapshot) => {

        sendMsgsByUser([]);
        sendMsgsByPartner([]);

        const data = snapshot.val();          
            if (data !== null) {
                Object.values(data).map((msg) => {
                    if(msg.usr == username){
                    sendMsgsByUser((oldArray) => [...oldArray, msg]);
                }
                    if(msg.usr !== username){
                    sendMsgsByPartner((oldArray) => [...oldArray, msg]);
                }            
            });
            }
        });
    }, []);

    // write

    const writeToDatabase = () => {
        const uuid = uid();

        set(ref(database, `/${Date.now()}`), {
            usr : username,
            uid : uuid,
            msg : msg,
            time : Date.now()
        });

        sendMsg("");
    };

    return (
        <div className="Chat-Box">
        
        <input type="text" value={msg} onChange={handleSubmit}/>
        <button onClick={writeToDatabase}>submit</button>
        
        {msgs1.map((msg) => (
        <>
                <p align = "right">
                <h1>{msg.msg}</h1>
                <h4>User: {msg.usr}</h4>
                <button>update</button>
                <button>delete</button></p>
                </>
        ))}

        {msgs2.map((msg) => (
        <>
                <p align = "left">
                <h1>{msg.msg}</h1>
                <h4>User: {msg.usr}</h4>
                <button>update</button>
                <button>delete</button></p>
                </>
        ))}
        </div>
    );
}


export default Chats