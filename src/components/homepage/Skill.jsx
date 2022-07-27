import React from "react";

import style from "./skill.module.css";
const Skill = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h3 className={style.title}>skills</h3>
        <ul className={style.tools}>
          <li>
            <h5>reactjs</h5>
          </li>
          <li>
            <h5>nodejs</h5>
          </li>
          <li>
            <h5>expressjs</h5>
          </li>
          <li>
            <h5>mongodb</h5>
          </li>
          <li>
            <h5>mysql</h5>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skill;
