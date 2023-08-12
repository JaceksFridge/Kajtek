import React from 'react'

interface ButtonBothProps {
  icon: React.ComponentType;
  text: string
}

const IconButton: React.FC<ButtonBothProps> = ({ icon: Icon, text }) => {
  return (
      <button 
        id="icon-btn"
        className="bg-white w-full h-11 border flex justify-center items-center gap-2 rounded-lg"
        >
          <Icon />
          <h5>{text}</h5>
      </button>
  );
}


export default IconButton


