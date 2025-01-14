import MentionSentiment from "@/components/screen/Home/MentionSentiment/MentionSentiment";
import StatisticEmotionAnalytics from "@/components/screen/Home/StatisticEmotionAnalytics/StatisticEmotionAnalytics";
import ThreatDetection from "@/components/screen/Home/ThreatDetection/ThreatDetection";

const HomePage = () => {
  return (
    <div className="space-y-6 pb-10">
      <h1>Home</h1>
      {/* <Button variant="default">Button</Button> */}
      <StatisticEmotionAnalytics />
      <MentionSentiment />
      <ThreatDetection />
    </div>
  );
};

export default HomePage;
