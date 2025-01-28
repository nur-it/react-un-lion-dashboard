import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router";
import { UsersIcon } from "../ui/svgs";
const PageHeading = ({ page_name }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-[24px] font-bold text-secondary_main dark:text-white sm:text-2xl">
        {page_name}
      </h2>
      <div className="flex items-center gap-1 text-gray600 dark:text-text_disable">
        <Link to={"/my-accounts"}>
          <UsersIcon size={20} />
        </Link>
        <MdChevronRight size={20} />
        <p className="text-sm">John Due</p>
      </div>
    </div>
  );
};

export default PageHeading;
