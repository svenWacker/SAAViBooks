import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import logo from "../img/logo-01.png";

const Landing = () => {
  return (
    <React.Fragment>
      <div className="about-wrapper">
        <div className="bg-wrapper">
          <h2 className="page-headings">
            About <img src={logo} />
          </h2>
          <p class="about-text">
            We are all web development students at&nbsp;
            <a
              class="dci"
              href="https://digitalcareerinstitute.org/"
              target="_blank"
            >
              DCI (Digital Career Institute)
            </a>
            in Berlin.
          </p>
          <p>
            SAAVIBOOKS is an App using Google Books APIs to discover new books
            and get information about them. Our application can perform
            full-text searches and retrieve book information, viewability and
            eBook availability. So you can also manage your personal
            bookshelves.
          </p>

          <h3>Team Members</h3>
          <ul>
            <li>
              <a href="https://github.com/svenWacker" target="_blank">
                <FaGithub className="social" /> &nbsp;Sven&nbsp;-&nbsp;Project
                Manager
              </a>
            </li>
            <li>
              <a href="https://github.com/Amopho" target="_blank">
                <FaGithub className="social" />
                &nbsp;Alina&nbsp;-&nbsp;Project Engineer
              </a>
            </li>
            <li>
              <a href="https://github.com/albaranlex" target="_blank">
                <FaGithub className="social" /> &nbsp;Alex&nbsp;-&nbsp;Project
                Engineer
              </a>
            </li>
            <li>
              <a href="https://github.com/VivianeBusch-Wallace" target="_blank">
                <FaGithub className="social" /> &nbsp;Vivi&nbsp;-&nbsp;Project
                Engineer
              </a>
            </li>
          </ul>
          <h3 style={{ zIndex: 2 }}>Technologies</h3>
          <div class="technologies-container" style={{ zIndex: 2 }}>
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
              style={{ zIndex: 2 }}
              src={`${process.env.PUBLIC_URL}/technologies/trello.png`}
              alt="trello"
            />
          </div>
        </div>
        <div id="wave" style={{ zIndex: -1 }}>
          <svg width="100%" height="200px" fill="none" style={{ zIndex: -1 }}>
            <path fill="white">
              <animate
                repeatCount="indefinite"
                fill="freeze"
                attributeName="d"
                dur="10s"
                values="
          M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
          M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;
          M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
          M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"
              ></animate>
            </path>
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
