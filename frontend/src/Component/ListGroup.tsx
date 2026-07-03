import React, { useState } from "react";
// import type { MouseEvent } from "react";
// event handler
//  const handleClick= (event: MouseEvent )=>{
//   console.log(event)
// }
interface ListGroupProps{
heading: string,
items: string[],
onSelection: (name: string)=> void
}

function ListGroup({heading, items,onSelection }:ListGroupProps) {
  const names = ["Dia", "Muna", "Mono"];
  const [selectedIndex, setSelectedIndex]= useState(-1)
  // names = [];
const messageFunc= ( message)=>{
  return names.length == 0 && <p>{message}</p> || <h4>{heading}</h4>
}
  return (
    <>
      
      {messageFunc("no squad found")}
      <ul className="list-group">
        {items.map((name, index) => (
          <li className= {index==selectedIndex?"list-group-item active":"list-group-item"} onClick={()=>{setSelectedIndex(index);
onSelection(name);
          }} key={index}> {name}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
