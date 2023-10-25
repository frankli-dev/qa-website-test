import { Question } from "types";
import { QuestionHeader } from "./QuestionHeader";
import { SideBar } from "./SideBar";
import { QuestionAnswerItem } from "./QuestionAnswerItem";
import { useMemo, useState } from "react";
import { useQuestionContext } from "context/question";

enum SortedBy {
  Score = "score",
  Trending = "trending",
  Modified = "modified",
  Created = "created",
}

const SortedByOptions: { value: SortedBy; text: string }[] = [
  { value: SortedBy.Score, text: "Highest score (default)" },
  { value: SortedBy.Trending, text: "Trending (recent votes count more)" },
  { value: SortedBy.Modified, text: "Date modified (newest first)" },
  { value: SortedBy.Created, text: "Date created (oldest first)" },
];

export const Content = () => {
  const { question, onVoteQuestion, onVoteAnswer } = useQuestionContext();
  const {
    title,
    askedAt,
    updatedAt,
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
        case SortedBy.Modified:
          return new Date(a.updatedAt) > new Date(b.updatedAt)
            ? -1
            : new Date(a.updatedAt) < new Date(b.updatedAt)
            ? 1
            : 0;
        case SortedBy.Created:
          return new Date(a.createdAt) < new Date(b.createdAt)
            ? -1
            : new Date(a.createdAt) > new Date(b.createdAt)
            ? 1
            : 0;
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
        modifiedAt={updatedAt}
        view={view}
      />
      <div className="flex">
        <div className="w-main-bar">
          <QuestionAnswerItem
            vote={vote}
            content={content}
            tags={tags}
            editedAt={updatedAt}
            createdAt={askedAt}
            user={user}
            comments={comments}
            onVote={onVoteQuestion}
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
              onVote={(isUpVote) => onVoteAnswer(answer.id, isUpVote)}
            />
          ))}
        </div>
        <SideBar />
      </div>
    </div>
  );
};
