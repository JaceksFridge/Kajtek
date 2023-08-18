import React from 'react'
import { motion } from 'framer-motion'

import IconModeBug from '@/icons/IconModeBug'
import IconModeExplain from '@/icons/iconModeExplain'
import IconModeRefractor from '@/icons/IconModeRefractor'

type ModeSwitchProps = {
    mode: string;
    toggleSwitch: any;
}

const ModeSwitch: React.FC<ModeSwitchProps> = ({ mode, toggleSwitch }) => {

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    }


  return (
    <div id="mode-switch" data-isOn={mode} className="relative mt-8 w-1/3 h-14 flex bg-light-green cursor-pointer rounded-2xl">
        <motion.div 
            className="absolute z-10 w-1/3 h-full p-1"
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
            className="selected-mode flex-1 flex z-10 justify-center items-center gap-2"
        >
            <div><IconModeBug /></div>
            <div>Bug</div>
        </div>
        <div 
            onClick={() => toggleSwitch("two")}
            className="selected-mode flex-1 flex z-10 justify-center items-center gap-2"
        >
            <div><IconModeExplain /></div>
            <div>Explain</div>
        </div>
        <div 
            onClick={() => toggleSwitch("three")}
            className="selected-mode flex-1 flex z-10 justify-center items-center gap-2"
        >
            <div><IconModeRefractor /></div>
            <div>Refractor</div>
        </div>
    </div>
  )
}

export default ModeSwitch
