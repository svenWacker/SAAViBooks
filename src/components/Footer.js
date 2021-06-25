import { FaMailBulk, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-wrapper">
      <div className="social-wrapper">
        <a href="#" target="_blank">
          <FaMailBulk className="social" />
        </a>
        <a href="#" target="_blank">
          <FaInstagram className="social" />
        </a>
        <a href="#" target="_blank">
          <FaFacebook className="social" />
        </a>
      </div>
      <div className="copyright">
        <h6>
          Copyright<sup>©</sup> <span className="year">{year}</span>
        </h6>
      </div>
    </div>
  );
};
export default Footer;
