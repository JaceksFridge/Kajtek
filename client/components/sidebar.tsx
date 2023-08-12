import React from 'react'
import { motion } from 'framer-motion'
import ButtonIcon from './ButtonIcon'
import ButtonBoth from './ButtonBoth'

import IconSidebar from '@/icons/IconSidebar'
import IconProfile from '@/icons/IconProfile'

interface SidebarProps{
    sidebar: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ sidebar }) => {

    const sidebarVariants = {
        hidden: {
          width: 0
        },
        visible: {
          width: "20%"
        }
    }


    return (
        <motion.div 
            id="sidebar" 
            className="relative h-full p-4 bg-light-green-400 flex flex-col justify-start"
            initial={false}
            animate={sidebar ? 'visible' : 'hidden'}
            variants={sidebarVariants}
        >
            <div id="top-buttons" className="bg-blue-500 w-full flex flex-row justify-start gap-2">
                <ButtonBoth icon={IconSidebar} text="New chat"/>
                <ButtonIcon icon={IconSidebar} />
            </div>

            <div id="profile-btn" className="absolute bottom-4 w-full pr-8">
                <ButtonBoth icon={IconProfile} text="adam.warzynski"/>
            </div>
        </motion.div>
    )
}

export default Sidebar
