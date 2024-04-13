import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './LoginFiles/Login'
import Register from './LoginFiles/Register'
import MainPage from './MainPage/mainPage'
import RoomRegister from './LoginFiles/roomRegister'
import JoinRoom from './MainPage/joinRoom'
import ManageProfile from './MainPage/manageProfile'
import SearchTaskRooms from './MainPage/SearchTaskRooms'
import TaskRoom from './TaskRoom/TaskRoom' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainPage/>
    </>
  )
}

export default App
