import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/contextData";

function Doctorcard({ id, name, salary, gender, age, specialization, handleDelete }) {
    let navigator = useNavigate();
    //let user = localStorage.getItem("token");
    let {user} = useContext(UserContext)
    return (
        <div className="card">
            <h3>Name : {name}</h3>
            <h3>Salary : {salary}</h3>
            <h3>Gender : {gender}</h3>
            <h3>Age : {age}</h3>
            <h3>Specialization : {specialization}</h3>
            {
                user ? (
                    <>
                        <button style={{ backgroundColor: "lightpink" }} onClick={() => navigator(`updateDoctor/${id}`)}>Update Doctor Details</button>
                        <button style={{ backgroundColor: "palegreen" }} onClick={() => handleDelete(id)}>Delete Doctor Details</button>
                    </>
                ) : ""
            }
            
        </div>
    )
}
export default Doctorcard;