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
        <h1 className="text-title">{title}</h1>

        <Button variant="filled" text="Ask Question" />
      </div>
      <div className="flex pb-[8px] mb-[16px] border-b border-black-200">
        <TitleItem label="Asked" value="7 years, 8 months ago" />
        <TitleItem label="Modified" value="6 years, 10 months ago" />
        <TitleItem label="Viewed" value="32k times" />
      </div>
    </div>
  );
};
