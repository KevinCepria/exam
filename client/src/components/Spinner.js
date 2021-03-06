import React from 'react'

const Spinner = ({ message = "Loading..."}) =>  {
  return (
    <div className="ui active inverted dimmer">
        <div className="ui big text loader">{message}</div>
    </div>
  )
}

export default Spinner