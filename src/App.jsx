import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/pastSlice'
import './App.css'

function App() {
  const count = useSelector((state) => state.myPast.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1
        className='text-green-600 text-2xl font-bold tracking-[5px] capitalize p-6 border-2 w-fit rounded-full'
      >
        hello
      </h1>
      <h3>Mycount : {count} </h3>
      <div className="btn flex gap-3">
        <button 
        className='border-2 py-2 px-4 rounded-2xl font-bold tracking-[2px]'
        onClick={() => (dispatch(increment()))}>Increment</button>
        <button 
        className='border-2 py-2 px-4 rounded-2xl font-bold tracking-[2px]'
        onClick={() => (dispatch(decrement()))}>Decrement</button>
        </div>
    </>
  )
}

export default App
