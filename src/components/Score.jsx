import React from 'react'
import style from '../styles/score.module.css'

const Score = ({playerScoreX,tieScore, playerScoreO}) => {
   
  return (
    <div>
       <h3>Score Board</h3>
       <table className={style.table}>
  <tr className={style.table_head_row}>
    <th className={style.table_head_row}>Player 1 (X)</th>
    <th className={style.table_head_row}>Player 2 (O)</th>
    <th className={style.table_head_row}>Tie</th>
   
  </tr>
  <tr className={style.table_head_row}>
    <td className={style.table_head_row}>{playerScoreX}</td>
    <td className={style.table_head_row}>{playerScoreO}</td>
    <td className={style.table_head_row}>{tieScore}</td>
    
  </tr>
  </table>
    </div>
  )
}

export default Score