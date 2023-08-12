import React from 'react'
import { motion } from 'framer-motion'
import ButtonIcon from './ButtonIcon'

import IconSidebar from '@/icons/IconSidebar'

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
            className="p-4 bg-blue-200 flex flex-col justify-start"
            initial={false}
            animate={sidebar ? 'visible' : 'hidden'}
            variants={sidebarVariants}
        >
            <div id="top-buttons" className="bg-blue-500 w-full flex flex-row justify-end gap-2">
                <ButtonIcon icon={IconSidebar} />
                <ButtonIcon icon={IconSidebar} />
            </div>
        </motion.div>
    )
}

export default Sidebar
