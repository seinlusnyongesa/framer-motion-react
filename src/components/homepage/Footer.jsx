import React from "react";
import style from "./footer.module.css";
import {
  FaFacebook,
  FaGithub,
  FaHeart,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Element } from "react-scroll";

const Footer = () => {
  return (
    <Element name="footer">
      <div className={style.container}>
        <div className={style.content}>
          <ul className={style.socials}>
            <li className={style.icon}>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li className={style.icon}>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li className={style.icon}>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li className={style.icon}>
              <a href="#">
                <FaGithub />
              </a>
            </li>
          </ul>
          <p>
            &copy;2022 made with{" "}
            <span>
              <FaHeart />
            </span>{" "}
            by seinlus nyongesa
          </p>
        </div>
      </div>
    </Element>
  );
};

export default Footer;
