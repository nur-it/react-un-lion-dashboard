import { topics } from "@/data/topicsData";

const MainTopics = () => {
  const getTextStyle = (value, color) => {
    let textSize = "";
    let fontWeight = "normal";

    // Check for red color (#F23838)
    if (color === "#F23838") {
      if (value >= 70) textSize = "text-2xl font-bold";
      else if (value >= 40) textSize = "text-base font-bold"; 
      else textSize = "text-xl font-bold"; 
    }
    // Check for green color (#0CAF60)
    else if (color === "#0CAF60") {
      if (value >= 70) textSize = "text-lg font-bold"; 
      else if (value >= 40) textSize = "text-base normal";
      else textSize = "text-xl font-bold";
    }
    
    else {
      if (value >= 70) textSize = "text-sm normal"; 
      else if (value >= 40) textSize = "text-sm medium"; 
      else textSize = "text-xl font-bold"; 
    }

    return `${textSize} ${fontWeight}`;
  };

  return (
    <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-4 dark:border-white/[10%] dark:bg-white/[4%] sm:p-6">
      <h5 className="text-lg font-bold text-secondary_main dark:text-white sm:text-xl">
        Main Topics
      </h5>
      <div className="flex flex-wrap items-center gap-3 2xl:gap-x-6 2xl:gap-y-5">
        {topics.map(([text, value, color], index) => (
          <p
            key={index}
            className={getTextStyle(value, color)}
            style={{ color: color }}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MainTopics;

