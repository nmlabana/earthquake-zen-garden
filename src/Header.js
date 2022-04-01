import React from "react";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function Header(props) {
    const source = props.source || {};
    const { title } = source.site || "";
    const { logoImage } = source.site || "";
    const { firstName } = source.profile || "";

    return (
        <div className="header">
            <Link to="/" state={{ featuresData: source.data, pageTitle: title }}>
                <img className="icon" src={logoImage}></img>
            </Link>
            <span className="text">
                <h1>{title}</h1>
            </span>
            <Link className="profile" to="/profile" state={{ profile: source.profile, pageTitle: title }}>
                Welcome {firstName}
            </Link>
        </div>
    );
}
