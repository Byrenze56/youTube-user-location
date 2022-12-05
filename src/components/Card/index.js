import React from 'react'


const Card = (props) => {
  
  return (
    <div>
      <p>{props.userLat}</p>
      <p>{props.userLang}</p>
    </div>
  )
}

export default Card