// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Login from './components/Login'
import HomePage from './components/HomePage'
import { myRouter } from './Router'
import { RouterProvider } from 'react-router'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

    <HomePage></HomePage>
    <RouterProvider router={myRouter} />
    </>
  )
}

export default App
