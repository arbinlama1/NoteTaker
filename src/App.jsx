import { useSelector, useDispatch } from 'react-redux'
import './App.css'

import MyRouter from './router/MyRouter';
import Nav from './component/Nav';
function App() {
  const dispatch = useDispatch();
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div
        className='flex flex-col gap-5 border p-4'>
        <Nav />
        <MyRouter />
      </div>
    </div>
  )
}

export default App
