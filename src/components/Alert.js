import React from 'react'

const Alert = ({alertMsg,alertType}) => {
    console.log(alertType);
  return (
    <div>
        <div className={`alert alert-${alertType} alert-dismissible fade show`} role="alert">
        <strong>{alertMsg}</strong>
        </div>
    </div>
  )
}

export default Alert