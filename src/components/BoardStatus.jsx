import React from 'react'
import style from '../styles/boardStatus.module.css'


const BoardStatus = ({status ,restart,winner, checkTie}) => {
  return (
    <div className={style.container}>
        <div  className={style.status_wrapper}>
            {status}
        </div>
        <div >
    <button className={`${style.restart_btn} ${winner? style.winner_bg : style.clear_bg}`} onClick={restart}>{winner || checkTie ? 'Restart the game' : 'Clear the game'}</button> 
        </div>
    
    </div>
  )
}

export default BoardStatus