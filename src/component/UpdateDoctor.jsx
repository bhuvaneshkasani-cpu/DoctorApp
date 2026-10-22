import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"

function UpdateDoctor(){
    let {id} = useParams();
    let [name,setName]=useState("");
    let [salary,setSalary]=useState("");
    let [gender,setGender]=useState("");
    let [age,setAge]=useState("");
    let [specialization,setSpecialization]=useState("");
    let nav = useNavigate();

    let getDetails = async () =>{
        let res=await axios.get(`https://api-bdti.onrender.com/doctors/${id}`)
        let data = res.data;
        setName(data.name ?? "")
        setAge(data.age ?? "")
        setGender(data.gender ?? "")
        setSalary(data.salary ?? "")
        setSpecialization(data.specialization ?? "")

    }

    useEffect(()=>{
        getDetails()
    },[])

    let handleUpdate = async(e) => {

        try{
            e.preventDefault();
            console.log("Name :"+name);
            console.log("Salary :"+salary);
            console.log("Gender :"+gender);
            console.log("Age :"+age);
            console.log("Specialization :"+specialization)

            let updateDoctor={name, salary, gender, age, specialization}
            let res = await axios.put(`https://api-bdti.onrender.com/doctors/${id}`,updateDoctor)
            alert("Doctor details updated successfully")

            setName("");
            setGender("");
            setSalary("");
            setAge("");
            setSpecialization("");
            nav("/")
        }catch(e){
            console.log(e);            
        }
    }
    return(
        <>
            <h1>Doctor ID : {id}</h1>
            <form onSubmit={handleUpdate}>
                <h1>Update Doctor</h1>
                <input type="text" placeholder="Enter your Name" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
                <input type="text" placeholder="Enter your Salary" value={salary} onChange={(e)=>{setSalary(e.target.value)}}/><br/><br/>
                <input type="text" placeholder="Enter your Gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}/><br/><br/>
                <input type="text" placeholder="Enter your Age" value={age} onChange={(e)=>{setAge(e.target.value)}}/><br/><br/>
                <input type="text" placeholder="Enter your Specialization" value={specialization} onChange={(e)=>{setSpecialization(e.target.value)}}/><br/><br/>
                <input type="submit" />
            </form>
        </>
    )
}
export default UpdateDoctor;