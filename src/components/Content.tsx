import { Question } from "types";
import { QuestionHeader } from "./QuestionHeader";
import { SideBar } from "./SideBar";
import { QuestionAnswerItem } from "./QuestionAnswerItem";

interface ContentProps {
  question: Question;
}

export const Content: React.FC<ContentProps> = ({ question }) => {
  const {
    title,
    askedAt,
    lastEditedAt,
    view,
    vote,
    content,
    tags,
    user,
    comments,
  } = question;
  return (
    <div className="w-content-x border-l border-l-black-225 p-[24px] mx-auto">
      <QuestionHeader
        title={title}
        askedAt={askedAt}
        modifiedAt={lastEditedAt}
        view={view}
      />
      <div className="flex">
        <div className="w-main-bar">
          <QuestionAnswerItem
            vote={vote}
            content={content}
            tags={tags}
            editedAt={lastEditedAt}
            user={user}
            comments={comments}
          />
        </div>
        <SideBar />
      </div>
    </div>
  );
};
