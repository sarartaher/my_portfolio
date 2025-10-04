import React, { useState } from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Update from "./pages/Update";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/update" element={<Update />} />
        </Route>
    )
);

const App = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <div className={theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}>
            {/* Button to switch theme */}
            <button
                onClick={toggleTheme}
                className="p-2 border my-2 fixed right-5 bottom-2 rounded-4xl"
            >
                Theme
            </button>

            {/* Router */}
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
