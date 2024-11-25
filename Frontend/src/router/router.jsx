import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../componentes/Login";

const Path = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Login" element= {<Login />}></Route>
            </Routes>
        </Router>
    );
}

export default Path;