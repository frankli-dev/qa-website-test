import { formatDateAgo } from "utils/date";
import { Button } from "./Button";

interface QuestionHeaderProps {
  title: string;
  askedAt: string;
  modifiedAt: string;
  view: number;
}

const TitleItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center mr-[16px] mb-[8px]">
    <span className="text-black-400 mr-2">{label}</span>
    <span className="text-black-600">{value}</span>
  </div>
);

export const QuestionHeader: React.FC<QuestionHeaderProps> = ({
  title,
  askedAt,
  modifiedAt,
  view,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between align-top mb-[8px]">
        <h1 className="text-headline1">{title}</h1>

        <Button variant="filled" text="Ask Question" />
      </div>
      <div className="flex pb-[8px] mb-[16px] border-b border-black-200">
        <TitleItem label="Asked" value={formatDateAgo(askedAt)} />
        <TitleItem label="Modified" value={formatDateAgo(modifiedAt)} />
        <TitleItem label="Viewed" value={`${view.toLocaleString()} times`} />
      </div>
    </div>
  );
};
