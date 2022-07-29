import React from "react";
import style from "./work.module.css";
import portfolio from "../../assets/images/portfolio.png";

const Work = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.content}>
          <h3 className={style.title}>Recent work</h3>
          <ul className={style.grid}>
            <li className={style.card}>
              <a href="#">
                <img
                  src={portfolio}
                  alt="A fully responsive portfolio website for seinlus nyongesa"
                  loading="lazy"
                  className={style.card_img}
                />
                <div className={style.card_items}>
                  <h5>portfolio</h5>
                  <ul className={style.tools}>
                    <li>reactjs</li>
                    <li>css3</li>
                    <li>framer motion</li>
                  </ul>
                  <p>A fully responsive portfolio website</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
