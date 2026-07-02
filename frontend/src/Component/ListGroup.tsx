import React, { useState } from "react";
// import type { MouseEvent } from "react";
// event handler
//  const handleClick= (event: MouseEvent )=>{
//   console.log(event)
// }
// interface ListGroupProps{
// heading: 
// }

function ListGroup() {
  const names = ["Dia", "Muna", "Mono"];
  const [selectedIndex, setSelectedIndex]= useState(-1)
  // names = [];
const messageFunc= ( message)=>{
  return names.length == 0 && <p>{message}</p> || <h4>This is your squad</h4>
}
  return (
    <>
      
      {messageFunc("no squad found")}
      <ul className="list-group">
        {names.map((name, index) => (
          <li className= {index==selectedIndex?"list-group-item active":"list-group-item"} onClick={()=>{setSelectedIndex(index)}} key={index}> {name}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
