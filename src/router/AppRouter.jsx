import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Second from "../pages/Second";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/second" element={<Second />} />
            </Routes>
        </>
    );
};

export default AppRouter;
