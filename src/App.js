import './App.css';
import {useState} from "react";

function App() {
  const [firstWin, setFirstWin] = useState(0);
  const [secondWin, setSecondWin] = useState(0);
  const [total, setTotal] = useState(21);
  const [totalChange, setTotalChange] = useState('');

  const firstWinFunc = () => {
      setFirstWin(1)
      setSecondWin(0)
  }

  const secondWinFunc = () => {
      setSecondWin(1)
      setFirstWin(0)
  }

  const clearAll = () => {
    setFirstWin(0)
    setSecondWin(0)
    setTotalChange('')
    setTotal(21)
  }

  return (
      <div className='container'>
          {(firstWin || secondWin) ? <div className='win first'>
              <div className={firstWin ? 'green' : 'red'}></div>
              <div className={secondWin ? 'green' : 'red'}></div>
          </div> : <div className='first'></div>}
          {totalChange ? <div
              className={totalChange === '+' && 'plus second' || totalChange === '-' && 'minus second' || 'second'}>
              {total} {totalChange}
          </div> : <div className='second hidden'>{total}</div>}

          <div className='third'>
              <div className='flexColumn'>
                  <div>Победа</div>
                  <div>
                      <button onClick={firstWinFunc}>1</button>
                      <button onClick={secondWinFunc}>2</button>
                  </div>
              </div>
              <div className='flexColumn'>
                  <div>
                      Очки тотала
                  </div>
                  <div>
                      <button onClick={() => setTotal(total + 1)}>+</button>
                      <button onClick={() => setTotal(total - 1)}>-</button>
                  </div>
              </div>
              <div className='flexColumn'>
                  <div>
                      Знак тотала
                  </div>
                  <div>
                      <button onClick={() => setTotalChange('+')}>+</button>
                      <button onClick={() => setTotalChange('-')}>-</button>
                      <button onClick={() => setTotalChange('=')}>=</button>
                  </div>
              </div>
              <div className='flexColumn'>
                  <div>
                      Очистить
                  </div>
                  <div>
                      <button onClick={clearAll}>Clear</button>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
