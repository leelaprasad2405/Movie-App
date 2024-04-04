//import React from "react";

// class Student extends React.Component{
//     render(){
//         console.log(this.props);
//         const {stuname,marks} = this.props;
//         return(
//             <>
//             <h1>Hello, {stuname}</h1>
//             <h3>you have secured {marks} %</h3>
//             <hr />
//             </>
//         )
//     }
// }

    // now lets see the above class component, can also render by functional component

function Student(props){
    const {stuname,marks} = props;
    // if we didnt collect these in const variable need to give in JSX as props.stuname,props.marks
    return(
        <>
            <h1>Hello, {stuname}</h1>
            <h3>you have secured {marks} %</h3>
            <hr />
        </>
    )
}

export default Student;