import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount } from './store/slices/counter';
import reactLogo from './assets/react.svg'

function App() {

  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className='App-header'>
        <img src={reactLogo} className="logo react" alt="logo" />
        <p>count is [ {counter} ]</p>
      </header>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button><button onClick={() => dispatch(decrement())}>
          Decrement
        </button><button onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>
      </div>
    </div>
  )
}

export default App
