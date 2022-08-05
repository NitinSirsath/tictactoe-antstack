import React from 'react'
import style from '../styles/square.module.css'



const Square = ({value , border, onClick}) => {
    
  return (
    <button className={`${value === 'X'? style.X_color : style.Y_color} ${style.square_btn} ${border}`} onClick={onClick}>
        {value}
    </button>
  )
}

export default Square
