

import React from 'react'


type OverlayProps = {
  onClick: any
}

const Overlay: React.FC<OverlayProps> = ({ onClick }) => {
  return (
    <div 
      id="overlay" 
      className="absolute top-0 bottom-0 left-0 right-0 z-40 bg-black bg-opacity-50" 
      onClick={onClick}>
    </div>
  )
}

export default Overlay
