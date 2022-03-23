import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "../pages/Login";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import SearchUser from "../pages/SearchUser";
import Chats from "../pages/Chats";
import Help from "../pages/HelpFinances";
import Settings from "../pages/Settings";



function App() {
    return (
        <div>
            <Header />
            <Sidebar />
                <div className="contents-container">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />}>
                                <Route path="/home" element={<Home />} />
                            </Route>
                            <Route path="/my-profile" element={<MyProfile />} />
                            <Route path="/search-user" element={<SearchUser />} /> 
                            <Route path="/chats" element={<Chats />} />   
                            <Route path="/help-finances" element={<Help />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/logout" element={<Login />} />   
                         </Routes>
                    </BrowserRouter>
                </div>
            </div>
       

    
        
   
    );
}

export default App;