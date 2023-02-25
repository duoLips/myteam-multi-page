import React from 'react'

const Button = (props) => {
  return (
    <>
      {
        props.disabled === 'true'
          ?
          <button disabled className={props.btnClass}>{props.btnTitle}</button>
          :
          <button className={props.btnClass}>{props.btnTitle}</button>
      } 
    </>
  )
}

export default Button
