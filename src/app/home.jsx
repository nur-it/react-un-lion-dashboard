import MentionSentiment from "@/components/screen/Home/MentionSentiment/MentionSentiment";
import StatisticEmotionAnalytics from "@/components/screen/Home/StatisticEmotionAnalytics/StatisticEmotionAnalytics";

const HomePage = () => {
  return (
    <div className="space-y-6 pb-20">
      <h1>Home</h1>
      {/* <Button variant="default">Button</Button> */}
      <StatisticEmotionAnalytics />
      <MentionSentiment />
    </div>
  );
};

export default HomePage;
