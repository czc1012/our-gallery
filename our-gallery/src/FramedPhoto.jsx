import { useState } from 'react'
import './FramedPhoto.css'

function FramedPhoto({ image, reason, type }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const rotation = (Math.random() * 6) - 3

  function handleClick() {
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      className={`frame-container frame-type-${type}`}
      onClick={handleClick}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className={`frame ${isFlipped ? 'flipped' : ''}`}>
        <div className="frame-front">
          <img src={image} alt="a memory" className="media-image" />
        </div>
        <div className="frame-back">
          <p>{reason}</p>
        </div>
      </div>
    </div>
  )
}

export default FramedPhoto