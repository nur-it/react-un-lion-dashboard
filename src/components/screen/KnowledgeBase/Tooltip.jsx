
const Tooltip = ({ content, isVisible }) => {
  return (
    <div>
      {isVisible && (
        <div className="absolute bottom-6 md:bottom-8 left-[30px] md:left-9 mt-1 flex flex-col items-center">
          <div className="relative">
            <div className="info-shadow rounded-md border border-[#E2E4E9] bg-white px-1.5 py-0.5 text-sm text-gray-700">
              {content}
            </div>
            <div className="absolute left-3 -mt-1 h-2 w-2 rotate-45 border-b border-r border-[#E2E4E9] bg-white shadow-md"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
