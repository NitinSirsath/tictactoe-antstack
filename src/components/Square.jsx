import React from 'react'
import style from '../styles/square.module.css'
import styleBoard from '../styles/board.module.css'


const Square = ({value , border, onClick}) => {
    
  return (
    <button className={`${value === 'X'? style.X_color : style.Y_color} ${style.square_btn} ${styleBoard.border}`} onClick={onClick}>
        {value}
    </button>
  )
}

export default Square
