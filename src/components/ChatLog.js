import { uid } from  "uid";
import { set, ref } from "firebase/database";
import { database } from "../Firebase";

   const ChatLog = (props) => {
        const msg = props.msg;
        const msgs = props.msgs;
        const user = props.user;
        const sendMsg = props.sendMsg;
        const userMail = user.email;

        function checkSide(msgMail) {
            let result;

            if (msgMail !== userMail) {
                result = 'left';
                console.log("result = "+result);
            } else {
                result = 'right';
                console.log("result = "+result);
            }
            return result;
        };

        const handleSubmit = (e) => {
            sendMsg(e.target.value);
        };

        /* Writting message into database, V1 */
        const writeToDatabase = () => {
            const uuid = uid();

            set(ref(database, `/${Date.now()}`), {
                usr : user.email,
                uid : uuid,
                msg : msg,
                time : Date.now()
            });

            sendMsg("");
        };

        function chatInput() {
            return (
                <div className="chat-input" align ="right">
                <input type="text" value={msg} onChange={handleSubmit}/>
                <button onClick={writeToDatabase}>submit</button>
                </div>
            )
        };

        /* Convert unix number code to date string */
        function convertUnix(msgtime) {
            var date = new Date(msgtime * 1000);
            let datemsg = date.toString();
            return datemsg;
        };

        function updateMsg(msg) {
            console.log("update button wurde gedrückt = " + msg.uid);
        };

        function deleteMsg(msg) {
            console.log("delete button wurde gedrückt" + msg.uid);
            database.ref(msg).remove();
        };

        return (
            <div>  
            {msgs.map((msg) => (
                <div className="chat-log">
                    <p align = {checkSide(msg.usr)}>
                    <h2>{msg.msg}</h2>
                    <h4>User: {msg.usr}</h4>
                    <h4>Time: {convertUnix(msg.time)}</h4>
                    <button onClick={() => updateMsg(msg)}>update</button>
                    <button onClick={() => deleteMsg(msg)}>delete</button>
                    </p>
                 </div>
                ))}
            <p>{chatInput()}</p>
            </div>
        )
    }

    export default ChatLog;