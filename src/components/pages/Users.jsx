import React from "react";
import FirstName from "../user/FirstName";
import LastName from "../user/LastName";
import UserForm from "../user/UserForm";

const Users = () => {
    return (
        <div className="user">
            <h1>Redux Toolkit State Change</h1>
            <UserForm/>
            <div className="user-name">
                <FirstName />
                <LastName />
            </div>
        </div>
    )
}
export default Users;