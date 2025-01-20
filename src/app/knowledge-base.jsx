import InformationKnowledge from "@/components/screen/KnowledgeBase/InformationKnowledge";
import ToggleTab from "@/components/screen/KnowledgeBase/ToggleTab";
import PageHeading from "@/components/shared/PageHeading";

const KnowledgeBasePage = () => {
  return (
    <div className="space-y-6 pb-10">
      <PageHeading page_name="Knowledge Base" />
      <div className="space-y-2 sm:space-y-6">
        <ToggleTab
          title="Add Information to the Knowledge Base"
          
          // content={<KnowledgeTable />}
          content={<InformationKnowledge />}
        />
        <ToggleTab title="Knowledge Table" content={"two"} />
        <ToggleTab
          title="Initial Information"
          // content={<InitialInformation />}
          content={"three"}
        />
      </div>
    </div>
  );
};

export default KnowledgeBasePage;
