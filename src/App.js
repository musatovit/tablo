import './App.css';
import {useState} from "react";

function App() {
    const [firstWin, setFirstWin] = useState(0);
    const [secondWin, setSecondWin] = useState(0);
    const [total, setTotal] = useState(21);
    const [totalChange, setTotalChange] = useState('');
    const [baseText, setBaseText] = useState('')
    const [inputText, setInputText] = useState('')
    const [inputBool, setInputBool] = useState(false)
    const [sizeText, setSizeText] = useState(10)
    const [isActive, setIsActive] = useState(true)


    const firstWinFunc = () => {
        setFirstWin(1)
        setSecondWin(0)
        setIsActive(false)
    }

    const secondWinFunc = () => {
        setSecondWin(1)
        setFirstWin(0)
        setIsActive(false)
    }

    const baseOne = () => {
        clearAll()
        setBaseText('Сами!')
        setIsActive(false)
    }
    const baseOneHalf = () => {
        clearAll()
        setBaseText('Не держим!')
        setIsActive(false)
    }

    const baseTwo = () => {
        clearAll()
        setBaseText('Тайм аут!')
        setIsActive(false)
    }

    const baseThree = () => {
        clearAll()
        setBaseText('Заканчиваем!')
        setIsActive(false)
    }

    const baseFour = () => {
        clearAll()
        setInputBool(true)
        setIsActive(false)
    }

    const totalPlus = () => {
        clearNotAll()
        setTotalChange('+')
        setIsActive(false)
    }

    const totalMinus = () => {
        clearNotAll()
        setTotalChange('-')
        setIsActive(false)
    }

    const totalEqual = () => {
        clearNotAll()
        setTotalChange('=')
        setIsActive(false)
    }

    const clearNotAll = () => {
        setFirstWin(0)
        setSecondWin(0)
        setTotalChange('')
        setBaseText('')
        setInputBool(false)
        setInputText('')
        setIsActive(true)
    }

    const clearAll = () => {
        setFirstWin(0)
        setSecondWin(0)
        setTotalChange('')
        setTotal(21)
        setBaseText('')
        setInputBool(false)
        setInputText('')
        setIsActive(true)
    }

    return (
        <div className={isActive ? 'container black' : 'container'}>
            {(firstWin || secondWin) ? <div className='win first'>
                <div className={firstWin ? 'green' : 'red'}></div>
                <div className={secondWin ? 'green' : 'red'}></div>
            </div> : <div className='first'></div>}
            {totalChange && <div className={totalChange === '+' && 'plus second' || totalChange === '-' && 'minus second' || 'second'}>
                {total} {totalChange}
            </div>}
            {baseText && <div className='second text'>{baseText}</div>}
            {inputText && <div className='second text' style={{ fontSize: `${sizeText}em` }}>{inputText}</div>}
            {(!baseText && !totalChange && !inputText) && <div className='second hidden'>{total}</div>}
            <div className={isActive ? 'third black' : 'third'}>
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
                        <button onClick={totalPlus}>+</button>
                        <button onClick={totalMinus}>-</button>
                        <button onClick={totalEqual}>=</button>
                    </div>
                </div>
                <div className='flexColumn'>
                    <div>
                        Базовые
                    </div>
                    {inputBool ? <>
                            <input
                                value={inputText}
                                onChange={e => setInputText(e.target.value)}
                            />
                        </>
                        :
                        <div>
                            <button onClick={baseOne}>Сами</button>
                            <button onClick={baseOneHalf}>Не держим</button>
                            <button onClick={baseTwo}>Тайм аут</button>
                            <button onClick={baseThree}>Заканчиваем!</button>
                            <button onClick={baseFour}>Свой</button>
                        </div>}
                </div>
                {inputBool && <div className='flexColumn'>
                    <div>
                        Размер текста
                    </div>
                    <div>
                        <button onClick={() => setSizeText(sizeText + 1)}>+</button>
                        <button onClick={() => setSizeText(sizeText - 1)}>-</button>
                    </div>
                </div>}
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
