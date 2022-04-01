import React from "react";
import {
    Routes,
    Route
  } from "react-router-dom";
import HomeView from "./views/HomeView";
import ProfileView from "./views/ProfileView";
import DetailView from "./views/DetailView";

export default function Routing() {
    return (
        <Routes>
            <Route exact path="/" element={<HomeView />}/>
            <Route exact path="/profile" element={<ProfileView />}/>
            <Route exact path="/detail" element={<DetailView />}/>
        </Routes>
    );
}
