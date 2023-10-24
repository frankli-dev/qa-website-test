import { Question } from "types";
import { QuestionHeader } from "./QuestionHeader";

interface ContentProps {
  question: Question;
}

export const Content: React.FC<ContentProps> = ({ question }) => {
  const { title, askedAt, lastEditedAt, view } = question;
  return (
    <div className="w-content-x border-l border-l-black-225 p-[24px] mx-auto">
      <QuestionHeader
        title={title}
        askedAt={askedAt}
        modifiedAt={lastEditedAt}
        view={view}
      />
      <div>
        <div>Main bar</div>
        <div>Side bar</div>
      </div>
    </div>
  );
};
