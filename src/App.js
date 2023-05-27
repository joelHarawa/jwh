import React from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import {HashRouter, Route, Routes} from "react-router-dom";

const router = (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    </HashRouter>
);
const App = () => {
    return router;
}

export default App;