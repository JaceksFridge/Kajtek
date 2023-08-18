import React from 'react'

import IconAbout from '@/icons/IconAbout'
import IconKeyboard from '@/icons/IconKeyboard'

type MenuInfoProps = {
    toggleKeyModal: () => void;
    toggleAboutModal: () => void;
}

const MenuInfo: React.FC<MenuInfoProps> = ({ toggleKeyModal, toggleAboutModal }) => {

  return (
    <div id="info-menu" className="absolute h-24 w-48 border border-gray top-20 right-16 rounded-lg">
        <div id="keyboard-tab" className="w-full h-1/2 px-4 flex justify-start items-center gap-2 hover:bg-light-green cursor-pointer">
            <IconKeyboard />
            <div 
                className="text-sm" 
                onClick = {toggleKeyModal}
            >Keyboard shortcuts
             </div>
        </div>
        <div id="about-tab" className="w-full h-1/2 px-4 flex justify-start items-center gap-2 hover:bg-light-green cursor-pointer">
            <IconAbout />
            <div 
                className="text-sm"
                onClick={toggleAboutModal}
            >About this project</div>
        </div>
    </div>
  )
}

export default MenuInfo
