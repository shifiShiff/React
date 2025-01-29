import './App.css'
import { myRouter } from './Router'
import { RouterProvider } from 'react-router'


function App() {

  return (
    <>

    <RouterProvider router={myRouter} />
    </>
  )
}

export default App
