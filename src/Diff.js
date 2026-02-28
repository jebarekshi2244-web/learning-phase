import React from "react";
import './Diff.css'
const Diff=()=>{
  const difference=[{
    SNo:1,
    Props:"Data passed to component from its parent.",
    State:"Data managed locally within the component."
  },
  {
    SNo:2,
    Props:"Immutable(Read-Only for the child).",
    State:"Mutable(Can be updated via setState or useState)."
  },
  {
    SNo:3,
    Props:"The parent component.",
    State:"The component itself."
  },
  {
    SNo:4,
    Props:"Changes when the parent sends new data.",
    State:"Changes via user interaction or internal logic."
  },
  {
    SNo:5,
    Props:"Triggers a re-render when props change.",
    State:"Triggers a re-render when state change."
  },
  {
    SNo:6,
    Props:"Configuration and communication.",
    State:"Interactivity and tracking dynamic data."
  }
]
  return (
    <div className="One">
        <h2 className="title">Difference between Props and State</h2>
   <div className="Container">
      <table border="1">
       
        <thead>
          <tr className="Three">
            <th>SNo</th>
            <th>Props</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {difference.map(({SNo,Props,State},index)=>(
            <tr Key={index}>
              <td>{SNo}</td>
              <td>{Props}</td>
              <td>{State}</td>
            </tr>
          ))}
         
        </tbody>
      </table>
      </div>
        </div>
  );
}
export default Diff;


