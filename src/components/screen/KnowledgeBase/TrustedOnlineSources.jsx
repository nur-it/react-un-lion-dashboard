import tickMark from "../../../assets/icon/check-circle.svg";
import info from "../../../assets/icon/information-circle.svg";

const TrustedOnlineSources = () => {
  return (
    <div className="grid grid-cols-9 gap-10">
      <div className="col-span-3">
        <div className="relative flex items-center gap-1.5">
          <p className="text-lg font-medium text-secondary_main">
            Trusted Online Sources
          </p>
          <img src={info} alt="info" className="cursor-pointer" />
        </div>
      </div>
      <div className="col-span-6 space-y-6">
        <form action="">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label
                htmlFor="Wikipedia Page"
                className="text-gray900 text-sm font-medium"
              >
                Wikipedia Page
              </label>
              <div className="bg-gray50 flex h-11 w-full items-center gap-2 rounded-lg border border-gray200 px-4 py-3">
                <input
                  type="text"
                  placeholder="Filter by category"
                  className="placeholder:text-gray500 h-full w-full bg-transparent text-sm outline-none"
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
