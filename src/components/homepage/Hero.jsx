import React from "react";
import style from "./hero.module.css";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

const contentVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 5,
      when: "beforeChildren",
    },
  },
};

const buttonVariant = {
  visible: {
    y: 10,
    transition: {
      when: "afterParent",
      duration: 1,
      yoyo: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className={style.container}>
      <motion.div
        variants={contentVariant}
        initial="hidden"
        animate="visible"
        className={style.content}
      >
        <h4>Hello, I'm seinlus nyongesa.</h4>
        <h1>a software engineer.</h1>
        <p>
          <span>have a project in mind ? don't be affraid to reach out.</span>{" "}
          you can also say hi.
        </p>

        <motion.button variants={buttonVariant}>
          <Link to="footer" smooth={true} duration={1000}>
            <FaChevronDown />{" "}
          </Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
