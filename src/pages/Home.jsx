import { useEffect, useState } from "react";
import Doctorcard from "../component/Doctorcard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  let [data, setData] = useState([]);
  let [search, setSearch] = useState("");
  //   useEffect(()=>{
  //   let res = fetch("https://api-bdti.onrender.com/doctors")
  //               .then((resp)=>resp.json())
  //               .then((result)=>setData(result))
  //               .catch(error=> console.log(error))
  //   console.log(res);
  // },[])

  useEffect(() => {
    getDetails();
  }, [])
  async function getDetails() {
      try {
        let res = await axios.get("https://api-bdti.onrender.com/doctors")
        setData(res.data)
      } catch (e) {
        console.log(e)
      }
    }

  let filterDoctor = data.filter((d) => {
    let dataFilter = d.name.toLowerCase().includes(search.toLowerCase())
    return dataFilter;
  })

  let nav = useNavigate();
  let handleDelete = async (id) =>{
    try{
      let deleteData = await axios.delete("https://api-bdti.onrender.com/doctors/"+id)

      alert("Doctor Details Deleted Successfully...")
      getDetails()
    }catch(e){
      console.log(e);
    }
  }
  return (

    <div className="box">
      <label>Search for Doctor : </label>
      <input type="text" onChange={(e) => { setSearch(e.target.value) }} value={search} />
      <div className="container">
        {
          filterDoctor.length > 0 ?
            filterDoctor.map((d) => (
              <Doctorcard key={d.id} id={d.id} name={d.name} gender={d.gender} age={d.age} salary={d.salary} specialization={d.specialization} handleDelete = {handleDelete}/>
            )) : <h1>No Doctor Found</h1>
        }
      </div>
    </div>
  )
}
export default Home;