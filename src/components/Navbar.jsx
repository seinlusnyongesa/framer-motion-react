import React, { useState } from "react";
import style from "./navbar.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navVariant = {
  hidden: { y: "-100vh" },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      when: "beforeChildren",
    },
  },
};
const buttonVariant = {
  hover: {
    border: "1px solid black",
    boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.3) ",
    scale: 1.1,
  },
  transition: { type: "spring", stiffness: 300 },
};
const menuVariant = {
  hidden: { y: "100vh" },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      duration: 0.3,
      ease: "easeInOut",
      stiffness: 110,
    },
  },

  exit: {
    x: "100vw",
    transition: {
      type: "spring",
      duration: 0.3,
      ease: "easeInOut",
      stiffness: 110,
    },
  },
};

const hamburgerSvgVariant = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

const svgPathVariant = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 3, ease: "easeInOut" },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      variants={navVariant}
      initial="hidden"
      animate="visible"
      className={style.nav}
    >
      <div className={[style.outer]}>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1.8, ease: "easeInOut" }}
        >
          <h5 className={style.brand}>seinlus</h5>
        </motion.div>

        <motion.button
          variants={buttonVariant}
          whileHover="hover"
          className={style.menuControler}
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <motion.svg
              variants={hamburgerSvgVariant}
              initial="hidden"
              animate="visible"
              width="35px"
              height="35px"
              xlmsn="http:www.w3.org/svgs"
            >
              <motion.path
                variants={svgPathVariant}
                d="M 10 10 h 30"
                stroke="black"
                fill="transparent"
              />
              <motion.path
                variants={svgPathVariant}
                d="M 10 20 h 20"
                stroke="black"
                fill="transparent"
              />
              <motion.path
                variants={svgPathVariant}
                d="M 10 30 h 10"
                stroke="black"
                fill="transparent"
              />
            </motion.svg>
          ) : (
            <svg width="20px" height="20px" xlmsn="http:www.w3.org/svgs">
              <motion.path
                variants={svgPathVariant}
                initial="hidden"
                animate="visible"
                d="M 0 0 T 20 20"
                stroke="black"
                strokeWidth="2"
              />
              <motion.path
                variants={svgPathVariant}
                initial="hidden"
                animate="visible"
                d="M 20 0 T 0 20"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          )}
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={style.menu}
          >
            <ul className={style.navLinks}>
              <motion.li
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{
                  scale: 1.5,
                }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <Link to="/">
                  <motion.h2 whileHover={{ color: "var(--primary-color)" }}>
                    home
                  </motion.h2>
                </Link>
              </motion.li>
              <motion.li
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.5, color: "var(--primary-color)" }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <Link to="/about">
                  <motion.h2 whileHover={{ color: "var(--primary-color)" }}>
                    about
                  </motion.h2>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
