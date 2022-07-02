import React, { useState, useEffect } from "react";
import { uid } from  "uid";

import { database, auth } from "../Firebase";
import { set, ref, onValue } from "firebase/database";


function Chats() {

    auth.onAuthStateChanged(function(user) {
        if (user) {
          console.log("User is logged in");
        } else {
            console.log("User is logged out");
        }
      });

    const user = auth.currentUser;

    const [userMail, setUserMail] = useState (user.email);

    useEffect(() => {
        setUserMail(userMail)
        console.log("Das kommt aus dem Effekt: "+ userMail);
    })


    const [msg, sendMsg] = useState ("");
    const [msgs1, sendMsgsByUser] = useState([]);
    const [msgs2, sendMsgsByPartner] = useState([]);
      
    const handleSubmit = (e) => {
        sendMsg(e.target.value);
    }
      
    // read

    useEffect(() => {
        onValue(ref(database), (snapshot) => {

        sendMsgsByUser([]);
        sendMsgsByPartner([]);

        const data = snapshot.val();          
            if (data !== null) {
                Object.values(data).map((msg) => {
                    if(msg.usr == userMail){
                    sendMsgsByUser((oldArray) => [...oldArray, msg]);
                }
                    if(msg.usr !== userMail){
                    sendMsgsByPartner((oldArray) => [...oldArray, msg]);
                }            
            });
            }
        });
    }, [])

    // write

    const writeToDatabase = () => {
        const uuid = uid();

        set(ref(database, `/${Date.now()}`), {
            usr : user.email,
            uid : uuid,
            msg : msg,
            time : Date.now()
        });

        sendMsg("");
    }

    function checkSide(a) {
        let result;
        if (a != userMail) {
          result = 'left';
          console.log("result = "+result);
        } else {
          result = 'right';
          console.log("result = "+result);
        }
        return result;
      }

    const ChatLog = () => {
        return (
        <div>
        {msgs1.map((msg) => (
            <div className="chat-rightside">
                    <p align = {checkSide(msg.usr)}>
                    <h1>{msg.msg}</h1>
                    <h4>User: {msg.usr}</h4>
                    <button>update</button>
                    <button>delete</button>
                    </p>
                </div>
            ))}
        </div>
        )
        }
    
    return (
        <div className="Chat-Box">
        <input type="text" value={msg} onChange={handleSubmit}/>
        <button onClick={writeToDatabase}>submit</button>
        <ChatLog />
        </div>
        )
}


export default Chats;