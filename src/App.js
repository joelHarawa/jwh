import React from "react";
import Home from "./pages/Home";

import {HashRouter, Route, Routes} from "react-router-dom";

const router = (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    </HashRouter>
);
const App = () => {
    return router;
}

export default App;