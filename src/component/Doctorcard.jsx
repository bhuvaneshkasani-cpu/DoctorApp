function Doctorcard({name, salary, gender, age, specialization}) {
    return(
        <div>
            <h3>Name : {name} </h3>
            <h3>Salary : {salary}</h3>
            <h3>Gender : {gender}</h3>
            <h3>Age : {age}</h3>
            <h3>Specialization : {specialization}</h3>
            <hr />
        </div>
    )
}

export default Doctorcard;