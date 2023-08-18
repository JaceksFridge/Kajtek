import React, { useState, useRef } from 'react'

import ButtonIcon from '@/components/ButtonIcon'
import Sidebar from '@/components/sidebar'
import KeyModal from '@/components/KeyModal'
import AboutModal from '@/components/AboutModal'
import ModeSwitch from '@/components/ModeSwitch'
import MenuInfo from '@/components/MenuInfo'
import PromptForm from '@/components/PromptForm'
import Overlay from '@/components/Overlay'

import IconSidebar from '@/icons/IconSidebar'
import IconInfo from '@/icons/IconInfo'
import IconProfile from '@/icons/IconProfile'
import IconPlus from '@/icons/iconPlus'

function index() {

  const [mes, setMes] = useState("Loading")
  const [input, setInput] = useState("")

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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


  // Sidebar
  const [sidebar, setSideBar] = useState<boolean>(false)

  const toggleSidebar = () => {
    setSideBar(!sidebar)
  }


  // all mode settings:
  const [mode, setMode] = useState<string>("one")
  const toggleSwitch = (activeTab: string) => {
    setMode(activeTab)
  }


  // MenuInfo
  const [infoMenu, setInfoMenu] = useState(false)

  const toggleInfoMenu = () => {
    if (typeof window !== 'undefined') {
        const info = document.querySelector("#button-info #icon-btn");

        if (info) {
            info.classList.toggle('bg-light-green');
        }
    }
    setInfoMenu(!infoMenu);
  }


  // Output
  const [output, setOutput] = useState(false)
  const [bin, setBin] = useState(false)

  const showBin = (e: any) => {
    setBin(!bin)
  }


  // Modes
  const [modeMenu, setModeMenu] = useState(false)

  const toggleModeMenu = (e: any) => {
    setModeMenu(!modeMenu)
  }

  const modes = {
    "bug": "icon",
    "explain": "icon",
    "refractor": "icon"
  }


  // MenuInfo Modal
  const [keyModal, setKeyModal] = useState(false)
  const [aboutModal, setAboutModal] = useState(false)

  const toggleKeyModal = () => {
    setOverlay(!overlay)
    setKeyModal(!keyModal)
  }

  const toggleAboutModal = () => {
    setOverlay(!overlay)
    setAboutModal(!aboutModal)
  }


  // Overlay
  const [overlay, setOverlay] = useState(false)
  const handleOverlayClick = (e: any) => {
    if (e.target === e.currentTarget) {
      
      if (keyModal) {
        toggleKeyModal();
      }
      if (aboutModal) {
        toggleAboutModal();
      }
    }
  };


  return (
    <div className="relative w-full h-screen bg-white flex">
      <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar}/>
      <div id="button-container" className={`${sidebar ? 'hidden' : 'visible'} absolute top-4 left-4`}>
        <ButtonIcon icon={IconSidebar} text="Open sidebar" onClick={toggleSidebar} />
      </div>
      
      <div id="main" className="w-full bg-white flex flex-col items-center justify-between">

        {overlay ? ( <Overlay onClick={handleOverlayClick} /> ) : null }
        {infoMenu ? ( <MenuInfo toggleAboutModal={toggleAboutModal} toggleKeyModal={toggleKeyModal} /> ) : ( null )}
        {keyModal ? ( <KeyModal /> ) : null }
        {aboutModal ? ( <AboutModal /> ) : null }


        <div id="button-info" className={"absolute top-4 right-4"}>
          <ButtonIcon icon={IconInfo} text="Click for more Info" onClick={toggleInfoMenu}/>
        </div>
        <div id="mode-container" className="w-full flex flex-col justify-between items-center">
          <div id="mode-btn">
            <button
              onClick={toggleModeMenu}
            >mode</button>
            {modeMenu ? (
            <div id="mode-menu" className="aboslute z-20 w-40 h-52">
              <div>bug</div>
              <div>explain</div>
              <div>refractor</div>
            </div>
            ) : (
              null
            )}
          </div>
        <ModeSwitch mode={mode} toggleSwitch={toggleSwitch}/>
      </div>
        {output ? (
            <div 
            id="output-container"
            className="w-3/5 h-auto"
          >
            <div id="output-block">
              <div 
                id="question-block"
                onClick={showBin}
                className="relative bg-light-green w-full h-14 px-6 py-4 flex items-center gap-6 rounded-2xl"
              >
                <IconProfile />
                <p id="user-question">How to plant a carrot?</p>
                {bin ? (
                  <div id="bin-icon" className="absolute right-6">
                    <IconPlus />
                  </div>
                ) : (
                  null
                )}  
              </div>
              <div id="answer-block"></div>
            </div>
          </div>
        ) : null }
        <PromptForm input={input} handleInput={handleInput} handleSubmit={handleSubmit}/>
      </div>
    </div>
  )
}

export default index
