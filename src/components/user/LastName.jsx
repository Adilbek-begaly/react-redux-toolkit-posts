import React from "react";
import { useSelector } from "react-redux";

const LastName = () => {

    const lastName = useSelector((state) => state.user.lastName)

    return (
        <div>
            <p>Last Name</p>
            <strong>{lastName}</strong>
        </div>
    )
}
export default LastName;