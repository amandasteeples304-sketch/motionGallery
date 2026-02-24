import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [images, setImages] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect (() => { 
  
  async function fetchData() {
  const res = await fetch('https://picsum.photos/v2/list'); 
  const data = await res.json(); 
  console.log(data);
  setImages(data); 
}
  fetchData();
}, []); 

  function handleKeyDown (event) {
    if (event.key === 'ArrowRight') {
      setCurrentIndex (previousIndex => previousIndex === images.length -1 ? 0 : previousIndex + 1)
    } 

    if (event.key === 'ArrowLeft') {
      setCurrentIndex (previousIndex => previousIndex === 0 ? images.length -1 : previousIndex -1)
    }
  }

  function handleThumbnailClick(index) {
    setCurrentIndex(index);
  }; 
  
  return (
    <div 
    className='page' 
    tabIndex={0}
    onKeyDown={handleKeyDown}
    >
      <div className='thumbnail'>
    
      {images.map((image, index) => {
        return ( 
          <div 
          key={index}
          onClick={() => handleThumbnailClick(index)}>

          <img className='image' src= {image.download_url} />
          </div>
        )
      })}
      </div> 
      <div className='bigImages'>
      {images.length > 0 ? <img src={images[currentIndex].download_url}/> :''} 
      </div>
    </div>
  )
}


export default App;

