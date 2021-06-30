import React from "react";
import { FaGithub } from "react-icons/fa";
import logo from "../img/logo-01.png";
import Footer from "./Footer";

const About = () => {
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
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default About;
