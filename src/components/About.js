import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Landing = () => {
  return (
    <React.Fragment>
      <div className="about-wrapper">
        <h2 className="page-headings">About SAAVIBOOKS</h2>
        <p class="about-text">
          We are all web development students at&nbsp;
          <a class="dci" href="https://digitalcareerinstitute.org/">
            DCI (Digital Career Institute)
          </a>
          in Berlin.
        </p>
        <p>
          SAAVIBOOKS is an App using Google Books APIs to discover new books and
          get information about them. Our application can perform full-text
          searches and retrieve book information, viewability and eBook
          availability. So you can also manage your personal bookshelves.
        </p>
        <h3>Team Members</h3>
        <ul>
          <li>
            <a href="https://github.com/svenWacker" target="_blank">
              <FaGithub className="social" />
            </a>
            Sven
          </li>
          <li>
            <a href="https://github.com/Amopho" target="_blank">
              <FaGithub className="social" />
            </a>
            Alina
          </li>
          <li>
            <a href="https://github.com/albaranlex" target="_blank">
              <FaGithub className="social" />
            </a>
            Alex
          </li>
          <li>
            <a href="https://github.com/VivianeBusch-Wallace" target="_blank">
              <FaGithub className="social" />
            </a>
            Vivi
          </li>
        </ul>
        <h3>Technologies</h3>

        <div class="technologies-container">
          <img
            src={`${process.env.PUBLIC_URL}/technologies/css.png`}
            alt="css"
          />
          <img
            src={`${process.env.PUBLIC_URL}/technologies/github.png`}
            alt="github"
          />
          <img
            src={`${process.env.PUBLIC_URL}/technologies/html-5.png`}
            alt="html-5"
          />
          <img
            src={`${process.env.PUBLIC_URL}/technologies/java-script.png`}
            alt="java-script"
          />
          <img
            src={`${process.env.PUBLIC_URL}/technologies/nodemon.svg`}
            alt="nodemon"
          />
          <img
            src={`${process.env.PUBLIC_URL}/technologies/slack.png`}
            alt="slack"
          />
          <img
            src={`${process.env.PUBLIC_URL}/technologies/vsc.png`}
            alt="vsc"
          />
          <img
            src={`${process.env.PUBLIC_URL}/technologies/zoom.png`}
            alt="zoom"
          />
          <img
            src={`${process.env.PUBLIC_URL}/technologies/trello.png`}
            alt="trello"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
