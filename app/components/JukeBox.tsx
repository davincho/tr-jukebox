import jukeBox from './jb.png';
import mobileJukeBox from './mobile-jb.png';

const Jukebox = () => {
  return (
    <div className="relative h-screen">
      <img className="md:hidden" src={mobileJukeBox} />
      <img
        className="absolute right-0 pb-3 h-full hidden md:block"
        src={jukeBox}
      />
    </div>
  );
};

export default Jukebox;
