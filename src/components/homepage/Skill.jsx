import React from "react";
import reactImg from "../../assets/images/react.png";
import sqlImg from "../../assets/images/sql.png";
import vscodeImg from "../../assets/images/vscode.png";
import css3Img from "../../assets/images/css3.png";
import expressImg from "../../assets/images/expressjs.png";
import html5Img from "../../assets/images/html5.png";
import jsImg from "../../assets/images/js.jpeg";
import mongodbImg from "../../assets/images/mongodb.png";
import nextjsImg from "../../assets/images/nextjs.png";
import nodeImg from "../../assets/images/node.jpeg";

import style from "./skill.module.css";
const Skill = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h3 className={style.title}>Uses</h3>
        <ul className={style.tools}>
          <li className={style.tool_container}>
            <img
              src={reactImg}
              alt="reactjs a webframework for javascript"
              loading="lazy"
            />
          </li>
          <li className={style.tool_container}>
            <img
              src={nextjsImg}
              alt="a web development framework for reactjs"
              loading="lazy"
            />
          </li>
          <li className={style.tool_container}>
            <img
              src={expressImg}
              alt="a web framework for nodejs"
              loading="lazy"
            />
          </li>
          <li className={style.tool_container}>
            <img
              src={mongodbImg}
              alt="a no sql database that stores data in form of documents"
              loading="lazy"
            />
          </li>
          <li className={style.tool_container}>
            <img
              src={sqlImg}
              alt="a language for data manipulation"
              loading="lazy"
            />
          </li>
          <li className={style.tool_container}>
            <img
              src={nodeImg}
              alt="a runtime environment for javascript, made runnig javascript out of the browser possible"
              loading="lazy"
            />
          </li>
          <li className={style.tool_container}>
            <img
              src={jsImg}
              alt="a programming language that can be understood by the web browser"
              loading="lazy"
            />
          </li>
          <li className={style.tool_container}>
            <img src={vscodeImg} alt="a modern text editor" loading="lazy" />
          </li>
          <li className={style.tool_container}>
            {" "}
            <img
              src={html5Img}
              alt="a language used to structure a webpage"
              loading="lazy"
            />
          </li>
          <li className={style.tool_container}>
            <img
              src={css3Img}
              alt="a language used for styling a webpage"
              loading="lazy"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skill;
