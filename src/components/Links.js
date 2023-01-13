import React from "react";
import user from "../data/user";

function Links(props) {
    return (
    <div>
        <h3>Links</h3>
        <a href="#user">{user.links.github}</a>
        <a href="#user">{user.links.linkedin}</a>
    </div>
)}


export default Links;
