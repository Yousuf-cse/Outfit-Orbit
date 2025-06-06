import React from "react";
import play_store from "../../assets/Images/play_store.png";
import app_store from "../../assets/Images/app_store.png";

const DownloadAppBanner = () => {
  return (
    <div className=" text-black p-6 mt-9 mb-9 flex flex-col items-center" id="app-download">
      <p className="text-3xl font-bold text-center mb-4 cursor-default">
        For Better Experience Download <br />
        <span className="text-blue-800 cursor-default">Outfit Orbit</span>
      </p>
      <div className="flex space-x-4">
        <a href="https://play.google.com/store/apps/details?id=com.yourapp" target="_blank" rel="noopener noreferrer">
          <img src={play_store} alt="Download on Play Store" className="w-32 h-auto" />
        </a>
        <a href="https://apps.apple.com/us/app/your-app/id123456789" target="_blank" rel="noopener noreferrer">
          <img src={app_store} alt="Download on App Store" className="w-32 h-auto" />
        </a>
      </div>
    </div>
  );
};

export default DownloadAppBanner;