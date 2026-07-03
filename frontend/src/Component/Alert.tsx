import React, { type ReactNode } from 'react'
interface Alertprop{
  children: ReactNode,
  onClose: ()=>void
}
const Alert = ({children, onClose}:Alertprop) => {
  return (
    <div className='alert alert-success'>
      {children}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
    </div>
  )
}

export default Alert
