import React from 'react'

const Counter = () => {
  const [timer, setTimer] = React.useState(0)
  React.useEffect(() => {
    console.log('component did mount')
    const interval = setInterval(() => {
      setTimer(timer + 1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [timer])
  //   React.useEffect(() => {
  //     console.log('use effect')
  //   }, [timer])
  const handleClick = () => {
    setTimer(timer + 1)
  }
  return (
    <div>
      <h4>Timer: {timer}</h4>
      <button type="button" onClick={handleClick}>Add</button>
    </div>
  )
}
export default Counter
