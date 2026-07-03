import React from 'react'
import Message from "../src/Message"
import ListGroup from "./Component/ListGroup"
const handleOnSelection= (name: string)=> {
  console.log(name);
  
}

function App() {
    const names = ["Dia", "Muna", "Mono"];
  return (
    <div>
      <Message/>
      <ListGroup heading= "The gang" items= {names} onSelection={handleOnSelection} />
      <ListGroup heading= "Favourites" items={["pink", "mango", "resort"]} onSelection={handleOnSelection}/>
    </div>
  )
}

export default App
