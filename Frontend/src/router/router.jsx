import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../App/Home";
import Login from "../App/Login";

const Path = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element= {<Home />}></Route>
                <Route path="/Login" element= {<Login />}></Route>
            </Routes>
        </Router>
    );
}

export default Path;