import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../components/pages/Home';
import Users from '../components/pages/Users';
import Item from '../components/pages/Item';
import Posts from '../components/pages/Posts';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<Home/>}/>
            <Route path="/user" element={<Users/>}/>
            <Route path="/item" element={<Item/>}/>
            <Route path="/posts" element={<Posts/>}/>
        </Routes>
    )
}
export default AppRouter;