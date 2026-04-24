import FramedPhoto from './FramedPhoto'

const galleryItems = [
  {
    id: 1,
    type: "photo",
    image: "/vienna1.png",
    reason: "i look forward to traveling the world and seeing a million cities (like vienna!) with you"
  },
  {
    id: 2,
    type: "photo",
    image: "/london.png",
    reason: "I can't wait to be in the same city as you forever"
  },
  {
    id: 3,
    type: "photo",
    image: "/us.jpeg",
    reason: "I love you!"
  },
  {
    id: 4,
    type: "photo",
    image: "/letter.png",
    reason: "Though we may be far apart, you are always near to my heart"
  },
  {
    id: 5,
    type: "pennant",
    image: "/chicago.png",
    reason: "You make every city feel like home"
  },
  {
    id: 6,
    type: "photo",
    image: "/thekiss.png",
    reason: "I could kiss you forever and ever"
  },
]

function App() {
  return (
    <div>
      <header className="gallery-header">
        <p className="gallery-subtitle">our gallery</p>
        <h1>josh & claire</h1>
        <p className="gallery-subtitle">click each frame to read</p>
      </header>
      <div className="gallery-wall">
        {galleryItems.map(item => (
          <FramedPhoto
            key={item.id}
            image={item.image}
            reason={item.reason}
            type={item.type}
          />
        ))}
      </div>
    </div>
  )
}

export default App