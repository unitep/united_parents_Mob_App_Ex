import React, { useState, useEffect } from "react";
import { database } from "../Firebase";
import { ref, onValue } from "firebase/database";

/* additional components / context */
import ChatLog from "../components/ChatLog";
import { useUserAuth } from "../context/UserAuthContext";


function Chats() {
    const user = useUserAuth();
    const [msg, sendMsg] = useState("");
    const [msgs, sendMsgAll] = useState([]);
   
    useEffect(() => {

        console.log("das ist die email = " + user.user.email);
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

    return (
        <div className="ChatView">
        <ChatLog 
        msg = {msg} 
        msgs = {msgs}
        user = {user.user}
        sendMsg = {sendMsg} />
        </div>
        )
};

export default Chats;