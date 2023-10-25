import { Question } from "types";
import { QuestionHeader } from "./QuestionHeader";
import { SideBar } from "./SideBar";
import { QuestionAnswerItem } from "./QuestionAnswerItem";
import { useMemo, useState } from "react";

interface ContentProps {
  question: Question;
}

enum SortedBy {
  Score = "score",
  Trending = "trending",
  Newest = "newest",
  Oldest = "oldest",
}

const SortedByOptions: { value: SortedBy; text: string }[] = [
  { value: SortedBy.Score, text: "Highest score (default)" },
  { value: SortedBy.Trending, text: "Trending (recent votes count more)" },
  { value: SortedBy.Newest, text: "Date modified (newest first)" },
  { value: SortedBy.Oldest, text: "Date created (oldest first)" },
];

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
    answers,
  } = question;
  const [sortedBy, setSortedBy] = useState<string>(SortedBy.Score);
  const onChangeSortedBy = (newValue: React.ChangeEvent<HTMLSelectElement>) => {
    setSortedBy(newValue.target.value);
  };

  const sortedAnswers = useMemo(() => {
    return answers.sort((a, b) => {
      switch (sortedBy) {
        case SortedBy.Score:
          return a.vote > b.vote ? -1 : a.vote < b.vote ? 1 : 0;
        case SortedBy.Trending:
          return a.vote > b.vote ? -1 : a.vote < b.vote ? 1 : 0;
        case SortedBy.Newest:
          return a.vote > b.vote ? -1 : a.vote < b.vote ? 1 : 0;
        case SortedBy.Oldest:
          return a.vote > b.vote ? -1 : a.vote < b.vote ? 1 : 0;
        default:
          return 0;
      }
    });
  }, [sortedBy, answers]);

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
            createdAt={askedAt}
            user={user}
            comments={comments}
          />
          <div className="flex items-center justify-between my-[12px]">
            <h2 className="text-subHeading">{answers.length} Answers</h2>
            <div className="flex items-center justif-end">
              <label className="text-sx mr-2">Sorted by: </label>
              <select
                className="border border-black-300 rounded-md p-[4px]"
                name="sortBy"
                id="sortBy"
                value={sortedBy}
                onChange={onChangeSortedBy}
              >
                {SortedByOptions.map((item) => (
                  <option value={item.value} key={item.value}>
                    {item.text}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {sortedAnswers.map((answer) => (
            <QuestionAnswerItem
              vote={answer.vote}
              content={answer.content}
              tags={[]}
              editedAt={answer.updatedAt}
              createdAt={answer.createdAt}
              user={answer.user}
              comments={answer.comments}
              key={answer.id}
              isAnswer
            />
          ))}
        </div>
        <SideBar />
      </div>
    </div>
  );
};
