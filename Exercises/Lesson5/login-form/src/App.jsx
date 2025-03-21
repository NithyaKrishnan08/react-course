import { useState } from 'react'
import { Welcome } from './components/Welcome'
import { LoginForm } from './components/LoginForm'
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Welcome />
      <LoginForm 
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
    </> 
  ); 
}

export default App
