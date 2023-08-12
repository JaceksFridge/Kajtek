import React from 'react'

interface ButtonIconProps {
  icon: React.ComponentType;
  text: string;
  onClick: () => void;
}

const IconButton: React.FC<ButtonIconProps> = ({ icon: Icon, text, onClick }) => {
  return (
      <button 
        id="icon-btn"
        title="I am a title"
        onClick={onClick}
        className="bg-white w-11 h-11 border grid place-items-center aspect-square rounded-lg hover:bg-light-green"
        >
          <Icon />
      </button>
  );
}


export default IconButton


