import MentionSentiment from "@/components/screen/Home/MentionSentiment/MentionSentiment";
import StatisticEmotionAnalytics from "@/components/screen/Home/StatisticEmotionAnalytics/StatisticEmotionAnalytics";
import ThreatDetection from "@/components/screen/Home/ThreatDetection/ThreatDetection";
import PageHeading from "@/components/shared/PageHeading";

const HomePage = () => {
  return (
    <div className="w-full space-y-6 pb-10">
      <PageHeading page_name="Dashboard" />
      <StatisticEmotionAnalytics />
      <MentionSentiment />
      <ThreatDetection />
    </div>
  );
};

export default HomePage;
