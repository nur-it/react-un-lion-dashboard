import Mentions from "./Mentions";
import Sentiment from "./Sentiment";

const MentionSentiment = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
      <Mentions />
      <Sentiment />
    </div>
  );
};

export default MentionSentiment;
