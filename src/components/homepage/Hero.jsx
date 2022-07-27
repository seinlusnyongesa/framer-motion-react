import React from "react";
import style from "./hero.module.css";
import { FaChevronDown } from "react-icons/fa";
const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h4>Hello, I'm seinlus nyongesa.</h4>
        <h1>a self proclaimed software engineer.</h1>
        <p>
          <span>have a project in mind ? don't be affraid to reach out.</span>{" "}
          you can also say hi.
        </p>

        <button>
          <FaChevronDown />{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
