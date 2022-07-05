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
      })

    const user = auth.currentUser;

    const [userMail, setUserMail] = useState (user.email);

    useEffect(() => {
        setUserMail(userMail)
        console.log("Das kommt aus dem Effekt: "+ userMail);
    })

    const [msg, sendMsg] = useState ("");
    const [msgs1, sendMsgAll] = useState([]);
      
    const handleSubmit = (e) => {
        sendMsg(e.target.value);
    }
      
    // read

    useEffect(() => {

        onValue(ref(database), (snapshot) => {
        sendMsgAll([]);

        const data = snapshot.val();          
            if (data !== null) {
                Object.values(data).map((msg) => {
                    sendMsgAll((oldArray) => [...oldArray, msg]);         
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

    function convertUnix(a) {
        var date = new Date(a * 1000);
        let datemsg = date.toString();
        return datemsg;
    }

    function ChatInput() {
        return (
        <div className="chat-input" align ="right">
        <input type="text" value={msg} onChange={handleSubmit}/>
        <button onClick={writeToDatabase}>submit</button>
        </div>
        )
    }

    const ChatLog = () => {
        return (
        <div>
        {msgs1.map((msg) => (
            <div className="chat-log">
                    <p align = {checkSide(msg.usr)}>
                    <h2>{msg.msg}</h2>
                    <h4>User: {msg.usr}</h4>
                    <h4>Time: {convertUnix(msg.time)}</h4>
                    <button>update</button>
                    <button>delete</button>
                    </p>
                </div>
            ))}
        </div>
        )
        }
    
    return (
        <div className="ChatView">
        <p><ChatLog /></p>
        <p>{ChatInput()}</p>
        </div>
        )
}


export default Chats;