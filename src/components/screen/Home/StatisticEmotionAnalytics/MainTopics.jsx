import { topics } from "@/data/topicsData";

const MainTopics = () => {
  return (
    <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-4 sm:p-6 dark:border-white/[10%] dark:bg-white/[4%]">
      <h5 className="text-lg sm:text-xl font-bold text-secondary_main dark:text-white">
        Main Topics
      </h5>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
        {topics.map((topic, index) => (
          <p key={index} className={topic.style}>
            {topic.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MainTopics;
