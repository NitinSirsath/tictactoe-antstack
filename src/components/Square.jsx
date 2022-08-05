import React from 'react'
import style from '../styles/square.module.css'

const Square = ({value , onClick}) => {
    console.log(value);
  return (
    <button className={`${value === 'X'? style.X_color : style.Y_color} ${style.square_btn}`} onClick={onClick}>
        {value}
    </button>
  )
}

export default Square
