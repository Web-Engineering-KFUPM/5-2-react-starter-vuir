function StudentCard(props){
    return(
        <div>
            <h3>Student's name: {props.name}</h3>
            <p>Student's ID: {props.id}</p>
            <p>Student's Department: {props.department}</p>
        </div>
        );
}
  export default StudentCard;
