import React from 'react'
import { motion } from 'framer-motion'


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
        className="grid place-items-center bg-blue-200"
        initial={false}
        animate={sidebar ? 'visible' : 'hidden'}
        variants={sidebarVariants}
        >
        Sidemenu
        </motion.div>
    )
}

export default Sidebar
