import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    let styles = {
        display: "flex",
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor:"#DC143C",
        color:"white"
    }
    let nav = useNavigate();
    return(
        <div style={styles}>
            <h1>Doctor Application</h1>
            <div>
                <button><Link to ="/">Home</Link></button> &nbsp;&nbsp;
                <button onClick={()=>nav("/addDoctor")}>Add Doctor</button> &nbsp;&nbsp;
                <button onClick={()=>nav("/login")}>Login</button>
            </div>
        </div>
    )
}

export default Navbar;