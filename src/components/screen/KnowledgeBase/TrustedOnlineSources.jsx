import tickMark from "../../../assets/icon/check-circle.svg";
import info from "../../../assets/icon/information-circle.svg";
import rotateLeft from "../../../assets/icon/rotate_left.svg";
import crossCircle from "../../../assets/icon/x-circle.svg";

const TrustedOnlineSources = () => {
  return (
    <div className="md:grid md:grid-cols-9 md:gap-10 space-y-4 md:space-y-0">
      <div className="md:col-span-3">
        <div className="relative flex items-center gap-1.5">
          <p className="text-base sm:text-lg font-medium text-secondary_main dark:text-white">
            Trusted Online Sources
          </p>
          <img src={info} alt="info" className="cursor-pointer" />
        </div>
      </div>
      <div className="md:col-span-6">
        <form action="" className="space-y-3 md:space-y-6">
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="Wikipedia Page" className="trusted-label dark:text-white">
                Wikipedia Page
              </label>
              <div className="trusted-input-box">
                <input
                  type="text"
                  placeholder="Filter by category"
                  className="trusted-input-field"
                />
                <img src={tickMark} alt="tickMark" />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="X" className="trusted-label">
                X
              </label>
              <div className="trusted-input-box">
                <input
                  type="text"
                  placeholder="X account name"
                  className="trusted-input-field"
                />
                <img src={crossCircle} alt="crossCircle" />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="Facebook" className="trusted-label">
                Facebook
              </label>
              <div className="trusted-input-box">
                <input
                  type="text"
                  placeholder="Facebook account name"
                  className="trusted-input-field"
                />
                <img src={rotateLeft} alt="rotateLeft" />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="Instagram" className="trusted-label">
                Instagram
              </label>
              <div className="trusted-input-box">
                <input
                  type="text"
                  placeholder="Instagram account name"
                  className="trusted-input-field"
                />
                <img src={tickMark} alt="tickMark" />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="TikTok" className="trusted-label">
                TikTok
              </label>
              <div className="trusted-input-box">
                <input
                  type="text"
                  placeholder="TikTok account name"
                  className="trusted-input-field"
                />
                <img src={tickMark} alt="tickMark" />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="Youtube" className="trusted-label">
                Youtube
              </label>
              <div className="trusted-input-box">
                <input
                  type="text"
                  placeholder="Youtube account name"
                  className="trusted-input-field"
                />
                <img src={tickMark} alt="tickMark" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrustedOnlineSources;
