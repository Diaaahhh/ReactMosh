import React from 'react'
interface Buttonprops{
  name: string,
  colour?: "primary"| "info"| "success"| "danger",
  onClick: ()=>void
}
const Button = ({name, colour= "primary",onClick}:Buttonprops) => {
  return (
    <div>
      <button type="button" className={'btn btn-'+colour} onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button
