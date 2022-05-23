import React from "react";
import { useSelector } from "react-redux";

const FirstName = () => {
    const firstName = useSelector((state) => state.user.firstName)
    return (
        <div>
            <p>First Name</p>
            <strong>{firstName}</strong>
        </div>
    )
}
export default FirstName;