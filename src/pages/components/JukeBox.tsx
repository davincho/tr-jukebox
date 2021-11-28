import React from "react";

import jukeBox from "./jb.png";
import mobileJukeBox from "./mobile-jb.png";

const Jukebox = () => {
  return (
    <div className="bg-container">
      <img className="md:hidden" src={mobileJukeBox.src} />
      <img
        className="absolute right-0 top-3 h-screen hidden md:block"
        src={jukeBox.src}
      />
    </div>
  );
};

export default Jukebox;
