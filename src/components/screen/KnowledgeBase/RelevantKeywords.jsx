import { useEffect, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import info from "../../../assets/icon/information-circle.svg";

const RelevantKeywords = () => {
  const [keywords, setKeywords] = useState(["Best Price", "Low Price"]);
  const [showInput, setShowInput] = useState(false);
  const [newKeyword, setNewKeyword] = useState("");
  const inputRef = useRef(null);

  const addKeyword = () => {
    if (newKeyword.trim() !== "") {
      setKeywords([...keywords, newKeyword.trim()]);
      setNewKeyword("");
      setShowInput(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setNewKeyword("");
        setShowInput(false);
      }
    };

    if (showInput) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showInput]);

  return (
    <div className="space-y-4 md:grid md:grid-cols-9 md:gap-10 md:space-y-0">
      <div className="md:col-span-3">
        <div className="relative flex items-center gap-1 sm:gap-1.5">
          <p className="text-base font-medium text-secondary_main dark:text-white sm:text-lg">
            Relevant Keywords
          </p>
          <img src={info} alt="info" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:col-span-6">
        {keywords.map((keyword, index) => (
          <button
            key={index}
            className="flex h-8 items-center justify-center gap-1 rounded-full bg-[#473BF012] px-2.5 py-1.5 text-sm font-medium text-primary_main dark:border dark:border-[#FFFFFF99] dark:bg-transparent dark:text-[#FFFFFFCC]"
          >
            <FiPlus size={16} />
            {keyword}
          </button>
        ))}

        {showInput ? (
          <div className="flex items-center gap-2" ref={inputRef}>
            <input
              type="text"
              value={newKeyword}
              onChange={(e) => setNewKeyword(e.target.value)}
              className="h-8 rounded-full border px-2.5 py-1.5 text-sm text-primary_main outline-none dark:border-[#FFFFFF99] dark:bg-transparent dark:text-[#FFFFFFCC]"
              placeholder="Enter keyword"
            />
            <button
              onClick={addKeyword}
              className="flex h-8 items-center justify-center rounded-full bg-primary_main px-2.5 py-1.5 text-sm font-medium text-white"
            >
              <FiPlus size={16} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowInput(true)}
            className="flex h-8 items-center justify-center gap-1 rounded-full bg-primary_main px-2.5 py-1.5 text-sm font-medium text-white"
          >
            <FiPlus size={16} />
            Add keyword
          </button>
        )}
      </div>
    </div>
  );
};

export default RelevantKeywords;
