function StudentCard({ name, id, department}){
    return(
        <div>
            <h3>Student's name: {name}</h3>
            <p>Student's ID: {id}</p>
            <p>Student's Department: {department}</p>
        </div>
        );
}
  export default StudentCard;
//no props yet