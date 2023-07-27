import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Configuration, OPenAIAPI } from "openai"

function App() {
  const [prompt, setPrompt] = useState("")

  const configuration = new Configuration({
    apikey: import.meta.env.VITE_Open_AI_Key
})

  return (
    <>
     <h2>Hiiiiii</h2>
     <textarea
     placeholder= "Generate Image"
     />

     <button onClick> Generate Now</button>


    </>
  )
}

export default App
