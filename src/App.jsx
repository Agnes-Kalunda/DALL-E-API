import { useState } from 'react'
import './App.css'
import { Configuration, OpenAIApi, OPenAIAPI } from "openai"

function App() {
  const [prompt, setPrompt] = useState("")

  const configuration = new Configuration({
    apikey: import.meta.env.VITE_Open_AI_Key
})

  const openai = new OpenAIApi(configuration)

  const generateImage = async () =>{
    const res = await openai.createImage({
     prompt: prompt,
     n: 1,
     size: 512*512
    }
    )

    console.log(res);
  }

  return (
    <>
     <h2>Hiiiiii</h2>
     <textarea
     placeholder= "Generate Image"
     onChange={(e) => setPrompt(e.target.value)}
     />

     <button onClick={generateImage}> Generate Now</button>


    </>
  )
}

export default App
