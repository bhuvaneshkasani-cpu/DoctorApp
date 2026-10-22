import { Navigate } from "react-router-dom";
import { Children, useContext } from "react";
import { UserContext } from "../context/contextData";

function ProtectedRoute({children}){
    let {user} =useContext(UserContext)
    return(
        <>
            {
                user ? (children) : (<Navigate to ="/login" replace/>)
            }
        </>
    )
}
export default ProtectedRoute;