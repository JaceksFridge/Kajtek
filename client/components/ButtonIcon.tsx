import React from 'react'

interface ButtonIconProps {
  icon: React.ComponentType;
}

const IconButton: React.FC<ButtonIconProps> = ({ icon: Icon }) => {
  return (
      <button 
        id="icon-btn"
        className="bg-white w-11 h-11 border grid place-items-center rounded-lg"
        >
          <Icon />
      </button>
  );
}


export default IconButton


