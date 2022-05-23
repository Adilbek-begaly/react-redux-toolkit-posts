import React from "react";
import { useDispatch } from "react-redux";
import { setFirstName, setLastName } from "../../features/user/userSlice";
import FirstName from "../user/FirstName";
import LastName from "../user/LastName";

const Users = () => {

    const dispatch = useDispatch()


    return (
        <div className="user">
            <h1>Redux Toolkit State Change</h1>
            <div className="user-inputs">
                <input 
                    onChange={(e) => { dispatch(setFirstName(e.target.value)) }}
                    className="input" 
                    type="text" 
                    placeholder="Fist Name"
                />
                <input
                    onChange={(e) => { dispatch(setLastName(e.target.value)) }}
                    className="input" 
                    type="text" 
                    placeholder="Last Name"
                />
            </div>
            <div className="user-name">
                <FirstName />
                <LastName />
            </div>
        </div>
    )
}
export default Users;