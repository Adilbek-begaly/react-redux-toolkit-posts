import React from "react";
import '../style/header.css';
import logo from '../img/logo.svg'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="header">
            <div className="header-logo">
                <Link to="/">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navbar">
                <Link className="navbar-link" to="/user">State</Link>
                <Link className="navbar-link" to="/item">Item</Link>
                <Link className="navbar-link" to="/posts">Posts</Link>
            </div>
        </div>
    )
}