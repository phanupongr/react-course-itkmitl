import React from 'react'

const Input = (props) => {
//   const [val, setVal] = React.useState('')
  const { type, value, onChange } = props
  const handleInputChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <React.Fragment>
      <input type={type} value={value} onChange={handleInputChange} />
    </React.Fragment>
  )
}

export default Input
