import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar.jsx";

const images = [
  "https://picsum.photos/400/300?random=1",
  "https://picsum.photos/400/300?random=2",
  "https://picsum.photos/400/300?random=3",
  "https://picsum.photos/400/300?random=4",
];

const App = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const previous = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div style={{ textAlign: "center" }}>
      <Navbar onFilter={() => {}} />

      <div style={{ marginTop: "2rem" }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            style={{ width: "400px", height: "300px", borderRadius: "8px" }}
          />
        </AnimatePresence>

        <div style={{ marginTop: "1rem" }}>
          <button onClick={previous} style={buttonStyle}>
            ⬅ Previous
          </button>
          <button onClick={next} style={buttonStyle}>
            Next ➡
          </button>
        </div>
      </div>
    </div>
  );
};

const buttonStyle = {
  margin: "0 0.5rem",
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  cursor: "pointer",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#ff6347", // matches coral navbar
  color: "#fff",
};

export default App;
