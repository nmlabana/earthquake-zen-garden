import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router  } from "react-router-dom";

import Header from "./Header";
import Routing from "./Routing";

import source from "./config/data.json";
import "./styles/style.css";

ReactDOM.render(
    <div>
        <Router>
            <Header source={source}/>
            <Routing/>
        </Router>
    </div>
    , document.getElementById("root"));
