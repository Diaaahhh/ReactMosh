import React, { useState } from 'react'
import Button from './Component/Button'
import Alert from './Component/Alert'

function App() {
  const [alertVisibility, setAlertVisibility]= useState(false)
  return (
    <div>
      
    {alertVisibility&&
    <Alert onClose={()=>{setAlertVisibility(false)}}>
      Saved successfully
      </Alert>}
     <Button name={"Save"} colour={"success"} onClick={()=>{setAlertVisibility(true)}}></Button>
     </div>
  )
}

export default App
