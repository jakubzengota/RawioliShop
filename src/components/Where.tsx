import React, { useContext } from "react";
import "font-awesome/css/font-awesome.min.css";
import "leaflet/dist/leaflet.css";
import rawiolikasa from "../assets/paniwiolaprzykasie.png";
import LocalizationIcon from "../assets/icons/LocalizationIcon";
import LanguageContext from '../utils/LanguageContext';

const Where = () => {
  const { translations, toggleLanguage } = useContext(LanguageContext);
  return (
    <div className="where">
      <div className="whereLeft">
        
        <div className="mainravioliDiv">
            
          <img
            className="rawiolikasa"
            src={rawiolikasa}
            alt="Owners of the shop"
          />
        </div>
        <LocalizationIcon/>
        <span className="whereLeftSpan">
          {translations.location}
        </span>
      </div>


      <div className="whereRight">
        <iframe className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d622.0171032553293!2d6.145433603004973!3d51.42016990615391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c744b9b40636b3%3A0xa1e058d913dc3a10!2sKloosterstraat%2064%2C%205971%20BD%20Grubbenvorst%2C%20Holandia!5e0!3m2!1spl!2spl!4v1716582521810!5m2!1spl!2spl"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Where;
