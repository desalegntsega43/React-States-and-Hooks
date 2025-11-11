import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../src/assets/Components/comIncreaseDecreaseCount/IncreaseDecreaseStyle.css'
import './App.css'
import MyCounter from './assets/Components/compoMyCounter/MyCounter'
import IncreaseDecreaseCount from './assets/Components/comIncreaseDecreaseCount/IncreaseDecreaseCount'
import UseEffectForTitle from './assets/Components/comUseEffectForTitle/UseEffectForTitle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyCounter/>
    <IncreaseDecreaseCount/> 
    <UseEffectForTitle/>
    </>
  )
}

export default App
