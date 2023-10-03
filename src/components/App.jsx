
import '../App.css'
import { Routes, Route } from 'react-router-dom'
import Greeting from './Greeting'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchGreeting } from '../redux/GreetingsSplice'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGreeting())
  }, [dispatch])


  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
      </Routes>
        ) 
}

export default App
