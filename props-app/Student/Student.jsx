
function Student(props){
    return(
        <div>
           <h1>Name:{props.name} </h1>
        <h2>Grade:{props.grade} </h2>
        <h2>Remarks:{props.remarks} </h2>
        </div>
    );
}
export default Student;