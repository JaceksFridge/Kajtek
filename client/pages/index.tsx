import React, { useState } from 'react'
import { motion } from 'framer-motion'

import ButtonIcon from '../components/ButtonIcon'
import Sidebar from '../components/sidebar'
import IconSidebar from '@/icons/IconSidebar'
import IconArrow from '@/icons/IconArrow'

function index() {

  const [mes, setMes] = useState("Loading")
  const [input, setInput] = useState("")

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:8080/api/prompt", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: input })
      })
      console.log('successfully posted data')

      // server respnonse
      const data = await response.json()
      setMes(data.prompted_data)
      console.log('successfully received data:', mes)

    } catch (error) {
      console.error("Failed to send Form ->", error)
    }
  }

  // sidebar settings
  const [sidebar, setSideBar] = useState<boolean>(true)

  const toggleSidebar = () => {
    setSideBar(!sidebar)
  }




  // all mode settings:
  const [mode, setMode] = useState<string>("one")

  const toggleSwitch = (activeTab: string) => {
    setMode(activeTab)
  }


  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  }


  return (
    <div className="relative w-full h-screen bg-white flex">
      <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar}/>
      <div id="button-container" className={`${sidebar ? 'hidden' : 'visible'} absolute top-4 left-4`}>
        <ButtonIcon icon={IconSidebar} text="Open sidebar" onClick={toggleSidebar} />
      </div>
      
      <div id="main" className="w-full bg-white flex flex-col items-center justify-between">
        <div id="mode-container" className="w-full flex flex-col justify-between items-center">
          <div id="mode-switch" data-isOn={mode} className="relative mt-8 w-1/3 h-14 flex bg-light-green cursor-pointer rounded-2xl">
            <motion.div 
            className="absolute w-1/3 h-full p-1"
            layout
            transition={spring}
            animate={{ 
              x: mode === "one" 
                  ? '0%' 
                  : mode === "two"
                      ? '100%'
                      : '200%',
            }} 
          >
            <div id="white-ball" className="w-full h-full bg-white rounded-2xl"></div>
          </motion.div>
            <div 
              onClick={() => toggleSwitch("one")}
              className="selected-mode flex-1 grid place-items-center z-10"
              >Bug</div>
            <div 
              onClick={() => toggleSwitch("two")}
              className="selected-mode flex-1 grid place-items-center z-10"
            >Explain</div>
            <div 
              onClick={() => toggleSwitch("three")}
              className="selected-mode flex-1 grid place-items-center z-10"
            >Refractor</div>
          </div>
        </div>
        <div id="prompt-container" className="mb-12 w-full flex justify-center">
          <form id="prompt-bar" className="bg-light-green px-6 w-3/5 h-auto flex justify-between items-center rounded-2xl">
            <textarea 
              name="prompt" 
              id="prompt-block" 
              className="bg-transparent w-full min-h-[40px] max-h-[200px] overflow-y-auto resize-none outline-none p-2"
              placeholder="Enter a prompt ..."
            ></textarea>
            <button className="h-4 w-4">
              <IconArrow />
            </button>
          </form>
        </div>
      </div>



      {/* <div className="input-block">
        <form onSubmit={handleSubmit}>
          <label htmlFor="prompt"></label>
          <input 
            type="text" 
            name="prompt" 
            value={input}
            onChange={handleInput}
          />
          <p>{input}</p>
          <button 
            className="submit-btn"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <h1 className="text-5xl text-blue-700">Hi</h1>
      <div className="result">
        <p className="result-text">
          {mes}
        </p>
      </div> */}
    </div>
  )
}

export default index
