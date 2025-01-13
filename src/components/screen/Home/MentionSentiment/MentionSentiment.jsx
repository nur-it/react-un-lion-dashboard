import Mentions from "./Mentions";
import Sentiment from "./Sentiment";

const MentionSentiment = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Mentions />
      <Sentiment />
    </div>
  );
};

export default MentionSentiment;
