import React from 'react'

export default function inputLonglat(props) {
  return (
    <div>

<input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          value={props.lat}        
          
        />
        
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          value={props.lng}
        />
        
    </div>
  )
}
