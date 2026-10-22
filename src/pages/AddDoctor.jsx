import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

function AddDoctor(){
    let [name,setName]=useState("");
    let [salary,setSalary]=useState("");
    let [gender,setGender]=useState("");
    let [age,setAge]=useState("");
    let [specialization,setSpecialization]=useState("");
    let nav = useNavigate();

    let handleSubmit = async(e) => {
        e.preventDefault();
        console.log("Name :"+name);
        console.log("Salary :"+salary);
        console.log("Gender :"+gender);
        console.log("Age :"+age);
        console.log("Specialization :"+specialization);

        let newDoctor = {name, salary, gender, age, specialization}

        let result = await axios.post("https://api-bdti.onrender.com/doctors/", newDoctor)
        alert('Doctor Added successfully')

        setName("");
        setGender("");
        setSalary("");
        setAge("");
        setSpecialization("");
        nav("/");
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Add Doctor</h1>
                <input type="text" placeholder="Enter your Name" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
                <input type="text" placeholder="Enter your Salary" value={salary} onChange={(e)=>{setSalary(e.target.value)}}/><br/><br/>
                <input type="text" placeholder="Enter your Gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}/><br/><br/>
                <input type="text" placeholder="Enter your Age" value={age} onChange={(e)=>{setAge(e.target.value)}}/><br/><br/>
                <input type="text" placeholder="Enter your Specialization" value={specialization} onChange={(e)=>{setSpecialization(e.target.value)}}/><br/><br/>
                <input type="submit" />
            </form>
        </div>
    )
}
export default AddDoctor;