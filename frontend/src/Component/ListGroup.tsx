import React from "react";

function ListGroup() {
  let names = ["Dia", "Muna", "Mono"];
  // names = [];
const messageFunc= ( message)=>{
  return names.length == 0 && <p>{message}</p> || <h4>This is your squad</h4>
}
  return (
    <>
      
      {messageFunc("no squad found")}
      <ul className="list-group">
        {names.map((name) => (
          <li className="list-group-item">{name}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
