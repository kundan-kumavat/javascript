import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function About(){
    const {user} = useContext(UserContext)
    if(!user) return <div>please login</div>;
    return <div>Welcome, {user.userName}</div>
};

export default About;