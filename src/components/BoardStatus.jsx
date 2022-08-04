import React from 'react'
import style from '../styles/boardStatus.module.css'

const BoardStatus = ({status ,restart,winner}) => {
  return (
    <div className={style.container}>
        <div className={style.status_wrapper}>
            {status}
        </div>
        <div >
    <button className={style.restart_btn} onClick={restart}>{winner? 'Restart the game' : 'Clear the game'}</button> 
        </div>
    
    </div>
  )
}

export default BoardStatus