import { useSelector, useDispatch } from 'react-redux'
import './App.css'

import MyRouter from './router/MyRouter';
import Nav from './component/Nav';
function App() {
  const dispatch = useDispatch();
  return (
    <>
      <Nav />
      <MyRouter />
    </>
  )
}

export default App
