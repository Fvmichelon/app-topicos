import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Register from './Register'
import MainPage from './mainPage'
import RoomRegister from '../../roomRegister'
import JoinRoom from './joinRomm'
import ManageProfile from './manageProfile'
import SearchTaskRooms from './SearchTaskRooms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchTaskRooms/>
    </>
  )
}

export default App
