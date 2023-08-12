import React from 'react'
import { motion } from 'framer-motion'
import ButtonIcon from './ButtonIcon'
import ButtonBoth from './ButtonBoth'

import IconSidebar from '@/icons/IconSidebar'
import IconProfile from '@/icons/IconProfile'
import IconPlus from '@/icons/IconProfile'
import IconChat from '@/icons/iconChat'

interface SidebarProps{
    sidebar: boolean
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebar, toggleSidebar }) => {

    const sidebarVariants = {
        hidden: {
          width: 0,
          padding: 0,
        },
        visible: {
          width: "20%",
        }
    }

    const elementVariants = {
        hidden: {
            opacity: 0,
            scale: 0.4
        },
        visible: {
            opacity: 1,
            scale: 1
        }
    }

    return (
        <motion.div 
            id="sidebar" 
            className="relative h-full p-4 bg-light-green-400 flex flex-col justify-start overflow-hidden"
            initial={false}
            animate={sidebar ? 'visible' : 'hidden'}
            variants={sidebarVariants}
        >
            <motion.div id="top-buttons" className="w-full flex flex-row justify-start gap-2 overflow-hidden" variants={elementVariants}>
                <ButtonBoth icon={IconPlus} text="New Chat"/>
                <ButtonIcon icon={IconSidebar} text="Close sidebar" onClick={toggleSidebar} />
            </motion.div>
            <div id="history" className="multiline-ellipsis">
                <h3 className="my-4 text-xs">Recents</h3>
                <div id="history-card" className="h-28 w-full mb-2 p-4 rounded-lg overflow-hidden cursor-pointer hover:bg-white">
                    <div id="history-card-top" className="mb-2 flex items-center gap-2">
                        <IconChat />
                        <h4 className="text-sm">How to plant a carrot?</h4>
                    </div>
                    <p id="history-text" className="text-xs multiline-ellipsis">
                        Here are a few steps on how to plant a carrot in your garden: Chose the right location. 
                        Carrots need full sun and well-drained soil ...
                    </p>
                    <div id="history-bin"></div>
                </div>
                <div id="history-card" className="h-28 w-full mb-2 p-4 rounded-lg overflow-hidden cursor-pointer hover:bg-white">
                    <div id="history-card-top" className="mb-2 flex items-center gap-2">
                        <IconChat />
                        <h4 className="text-sm">How to plant a carrot?</h4>
                    </div>
                    <p id="history-text" className="text-xs multiline-ellipsis">
                        Here are a few steps on how to plant a carrot in your garden: Chose the right location. 
                        Carrots need full sun and well-drained soil ...
                    </p>
                    <div id="history-bin"></div>
                </div>
                <div id="history-card" className="h-28 w-full mb-2 p-4 rounded-lg overflow-hidden cursor-pointer hover:bg-white">
                    <div id="history-card-top" className="mb-2 flex items-center gap-2">
                        <IconChat />
                        <h4 className="text-sm">How to plant a carrot?</h4>
                    </div>
                    <p id="history-text" className="text-xs multiline-ellipsis">
                        Here are a few steps on how to plant a carrot in your garden: Chose the right location. 
                        Carrots need full sun and well-drained soil ...
                    </p>
                    <div id="history-bin"></div>
                </div>
            </div>

            <motion.div id="profile-btn" className="absolute bottom-4 w-full pr-8 overflow-hidden" variants={elementVariants}>
                <ButtonBoth icon={IconProfile} text="adam.warzynski"/>
            </motion.div>
        </motion.div>
    )
}

export default Sidebar
