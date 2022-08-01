import React from "react";
import style from "./about.module.css";
import sein from "../assets/images/sein.jpg";
import { motion } from "framer-motion";

const contentVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 6,
    },
  },
};

const About = () => {
  return (
    <div className={style.container}>
      <motion.div
        variants={contentVariant}
        initial="hidden"
        animate="visible"
        className={style.content}
      >
        <h3>About me</h3>
        <p>who is seinlus nyongesa ?</p>
        <img src={sein} alt=" seinlus nyongesa" className={style.about_image} />
        <p>
          Hi, i'm seinlus nyongesa a kenyan based developer. I work with React,
          Nodejs, Express and Sql. I have over 8 months using these technologies
          in my own projects
        </p>
        <p>
          I have passion for frontend techonologies and writting solutions that
          are scalable, maintaining high accessibility standards.
        </p>

        <p>
          I have a variety of interest. these includes chess , programming and
          travelling.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
