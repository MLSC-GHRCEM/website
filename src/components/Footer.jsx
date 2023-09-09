import React from "react";
import mlsclogo from "../assets/MLSC Logo Changed.png";
import instagram from "../assets/socials/icons8-instagram-48.png";
import twitter from "../assets/socials/icons8-twitter-48.png";
import youtube from "../assets/socials/icons8-youtube-48.png";
import whatsapp from "../assets/socials/icons8-whatsapp-48.png";
import linkedin from "../assets/socials/icons8-linkedin-48.png";

function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row  justify-between mt-20 py-8 lg:px-72 bg-[#E5E7EB] px-8"
      id="contact"
    >
      <div className="">
        <img src={mlsclogo} alt="" className="w-24" />
        <h1 className="text-2xl font-bold">MLSC GHRCEM</h1>
        <p className="text-lg">We Build; Don't Talk</p>
      </div>
      <div className="md:mt-3 mt-5">
        <div>
          <p className="text-xl font-medium">Socials:</p>
          <div className="flex">
            <a href="https://www.instagram.com/mlsc.ghrcem/" target="_blank">
              <img
                src={instagram}
                alt="logo-ig"
                className="w-9 h-9"
                target="_blank"
              />
            </a>
            <a href="https://www.linkedin.com/company/mlsa-ghrcem/">
              <img
                src={linkedin}
                alt="logo-yt"
                className="w-9 h-9"
                target="_blank"
              />
            </a>
            <a href="https://chat.whatsapp.com/COOBqVI9JMRC6n4xGvJann">
              <img
                src={whatsapp}
                alt="logo-wh"
                className="w-9 h-9"
                target="_blank"
              />
            </a>
            <a href="https://twitter.com/mlsc_ghrcem" target="_blank">
              <img src={twitter} alt="logo-twt" className="w-9 h-9" />
            </a>
            <a href="">
              <img
                src={youtube}
                alt="logo-yt"
                target="_blank"
                className="w-9 h-9"
              />
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-medium lg:mt-5 mt-3">Contact Us:</h1>
          <a href="mailto:mlscghrcem@outlook.com">mlscghrcem@outlook.com</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
