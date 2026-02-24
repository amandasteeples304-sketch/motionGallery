import React, { useState } from "react";
import { motion } from "framer-motion";

const navItems = ["All", "Nature", "Cities", "People", "Animals"];

const Navbar = ({ onFilter }) => {
  const [active, setActive] = useState("All");

  return (
    <nav style={styles.nav}>
      {navItems.map((item) => (
        <motion.div
          key={item}
          onClick={() => {
            setActive(item);
            onFilter(item); // Callback to filter gallery images
          }}
          style={{
            ...styles.navItem,
            color: active === item ? "#ffd700" : "#ffffff", // active accent vs normal
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
          {active === item && (
            <motion.div
              layoutId="underline"
              style={styles.underline}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </motion.div>
      ))}
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    padding: "1rem",
    position: "relative",
    backgroundColor: "rgba(0,0,0,0.6)", // semi-transparent dark background
    borderBottom: "1px solid rgba(255,255,255,0.3)", // subtle border
    backdropFilter: "blur(5px)", // optional: nice frosted effect over images
  },
  navItem: {
    position: "relative",
    cursor: "pointer",
    fontSize: "1.2rem",
    fontWeight: 500,
  },
  underline: {
    position: "absolute",
    height: "2px",
    width: "100%",
    background: "#4169e1", // bright accent color
    bottom: "-4px",
    left: 0,
    borderRadius: "2px",
  },
};

export default Navbar;
