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
            onFilter(item);
          }}
          style={{
            ...styles.navItem,
            color: active === item ? "#ffd700" : "#ffffff",
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
    padding: "1rem 2rem",
    backgroundColor: "#ff6347",
    borderBottom: "2px solid #e5533d",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textTransform: "uppercase",
  },
  navItem: {
    position: "relative",
    cursor: "pointer",
    fontSize: "1.2rem",
    fontWeight: 600,
  },
  underline: {
    position: "absolute",
    height: "2px",
    width: "100%",
    background: "#ffd700",
    bottom: "-4px",
    left: 0,
    borderRadius: "2px",
  },
};

export default Navbar;
