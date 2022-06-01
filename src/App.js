import logo from './logo.svg';
import './App.css';
import {Count,increement,decreement} from './Redux/Action'
import {useDispatch} from 'react-redux'
import Counter from './Counter'

function App() {
  const dispatch=useDispatch()
  return (
    <div className="App">
   <button onClick={()=>dispatch(Count())}>+</button>
   <button onClick={()=>dispatch(increement())}>increement</button>
   <button onClick={()=>dispatch(decreement())}>decreement</button>
   <Counter/>


    </div>
  );
}

export default App;
