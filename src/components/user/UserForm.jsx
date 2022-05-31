import React from "react";
import { useDispatch } from "react-redux";
import { setFirstName, setLastName } from "../../redux/features/user/userSlice";


function UserForm() {

    const dispatch = useDispatch()

    return (
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
    )
}
export default UserForm;