import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [images, setImages] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://picsum.photos/v2/list");
      const data = await res.json();
      console.log(data);
      setImages(data);
    }
    fetchData();
  }, []);

  function handleKeyDown(event) {
    if (event.key === "ArrowRight") {
      setCurrentIndex((previousIndex) =>
        previousIndex === images.length - 1 ? 0 : previousIndex + 1,
      );
    }

    if (event.key === "ArrowLeft") {
      setCurrentIndex((previousIndex) =>
        previousIndex === 0 ? images.length - 1 : previousIndex - 1,
      );
    }
  }

  let nextIndex = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  let previousIndex = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const buttonStyle = {
    margin: "0 0.5rem",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#ff6347",
    color: "#fff",
  };

  function handleThumbnailClick(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="page" tabIndex={0} onKeyDown={handleKeyDown}>
      <div className="thumbnail">
        {images.map((image, index) => {
          return (
            <div key={index} onClick={() => handleThumbnailClick(index)}>
              <motion.img
                className="image"
                src={image.download_url}
                initial={{ scale: 1 }}
                whileHover={{
                  scale: [null, 1.1, 1.3],
                  transition: {
                    duration: 0.5,
                    times: [0, 0.6, 1],
                  },
                }}
                whileTap={{ scale: 0.95 }}
              />
            </div>
          );
        })}
      </div>
      <div className="bigImages">
        {images.length > 0 ? (
          <img src={images[currentIndex].download_url} />
        ) : (
          ""
        )}
        <div style={{ marginTop: "1rem" }}>
          <button onClick={previousIndex} style={buttonStyle}>
            ⬅ Previous
          </button>
          <button onClick={nextIndex} style={buttonStyle}>
            Next ➡
          </button>
        </div>
      </div>
    </div>
  );
}
