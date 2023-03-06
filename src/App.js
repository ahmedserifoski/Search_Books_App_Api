import React, { useState, useEffect } from "react";
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

import "./App.css";

import Home, { loadRandomBooks } from "./pages/Home";

import DetailedBook, { detailedBookLoader } from "./pages/DetailedBook";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route
                index
                element={<Home />}
                loader={loadRandomBooks}
            />
            <Route 
                path=":id" 
                element={<DetailedBook />} 
                loader={detailedBookLoader}
            />
        </Route>
    )
);

function App() {
    // const [books, setBooks] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    return <RouterProvider router={router} />;
}
export default App;
