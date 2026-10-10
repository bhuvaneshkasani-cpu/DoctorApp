import { useEffect, useState } from "react";
import Doctorcard from "./component/Doctorcard";
import Navbar from "./component/Navbar";
import AddDoctor from "./pages/AddDoctor";

function App(){
  let [data,setData]=useState([]);
  let[search,setSearch]=useState("");
  useEffect(()=>{
    let res = fetch("https://api-bdti.onrender.com/doctors")
                .then((resp)=>resp.json())
                .then((result)=>setData(result))
                .catch(error=> console.log(error))
    console.log(res);
  },[])

  let filterDoctor=data.filter((d)=>{
    let dataFilter = d.name.toLowerCase().includes(search.toLowerCase())
    return dataFilter;
  })
  return(
    <>
      <Navbar/>
      {/* <Doctorcard name="sai" gender="male" age={25} salary={450000} specialization="ENT"/>
      <Doctorcard name="nithin" gender="male" age={20} salary={770000} specialization="ORTHO"/>
      <Doctorcard name="Mia" gender="female" age={28}/> */}
      {/* <AddDoctor/> */}
      <label>Search for Doctor</label>
      <input type="text" onChange={(e)=>{setSearch(e.target.value)}} value={search} />
      {
        filterDoctor.length>0 ?
        filterDoctor.map((d)=>(
            <Doctorcard key={d.id} name={d.name} gender={d.gender} age={d.age} salary={d.salary} specialization={d.specialization}/>
          )
        ) : <h1>No Doctor Found</h1>
      }
    </>
  )
}
export default App;