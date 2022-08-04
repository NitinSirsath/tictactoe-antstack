import React from 'react'
import style from '../styles/square.module.css'

const Square = ({value , onClick}) => {
  return (
    <button className={style.square_btn} onClick={onClick}>
        {value}
    </button>
  )
}

export default Square