import React from 'react'

const LabelInput = ({text}) => {
  return (
    <div>
      <label htmlFor="">{text}</label>
      <input type="text" />
    </div>
  )
}

export default LabelInput
