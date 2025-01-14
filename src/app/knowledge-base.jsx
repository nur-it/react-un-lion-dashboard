import InformationKnowledge from "@/components/screen/KnowledgeBase/InformationKnowledge";
import KnowledgeTable from "@/components/screen/KnowledgeBase/KnowledgeTable";
import PageHeading from "@/components/shared/PageHeading";

const KnowledgeBasePage = () => {
  return (
    <div className="space-y-6 pb-10">
      <PageHeading page_name="Knowledge Base" />
      <div className="space-y-6">
        <InformationKnowledge />
        <KnowledgeTable />
      </div>
    </div>
  );
};

export default KnowledgeBasePage;
