const Tooltip = ({ content, isVisible }) => {
  return (
    <div>
      {isVisible && (
        <div className="absolute bottom-6 left-0 mt-1 flex flex-col items-center">
          <div className="relative">
            <div className="info-shadow w-max rounded-md border border-[#E2E4E9] bg-white px-1.5 py-0.5 text-xs text-gray-700 dark:border-[#344054] dark:bg-black dark:text-white sm:text-sm">
              {content}
            </div>
            {/* Triangle shape */}
            <div className="absolute left-3 -mt-1 h-2 w-2 rotate-45 border-b border-r border-[#E2E4E9] bg-white shadow-md dark:border-[#344054] dark:bg-black"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
