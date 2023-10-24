import { Question } from "types";

interface ContentProps {
  question: Question;
}

export const Content: React.FC<ContentProps> = ({ question }) => {
  console.log(question);
  return (
    <div className="w-content-x border-l border-l-black-225 p-3 mx-auto">
      <div>Question header</div>
      <div>Info</div>
      <div>
        <div>Main bar</div>
        <div>Side bar</div>
      </div>
    </div>
  );
};
