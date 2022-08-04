
import style from './App.module.css';
import Board from './components/Board';

function App() {
  return (
    <div >
        <h1 className={style.heading}>TIC TAC TOE</h1>
      <div className={style.app}>
      <Board />
      </div>
    </div>
  );
}

export default App;
