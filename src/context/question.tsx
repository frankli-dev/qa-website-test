import { question_1 } from "mocks/mockQuestions";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Question } from "types";

type ContextType = {
  question: Question;
  onVoteQuestion: (isUpVote: boolean) => void;
  onVoteAnswer: (id: string, isUpVote: boolean) => void;
};

export const QuestionContext = createContext<ContextType | undefined>(
  undefined
);

export const QuestionProvider = ({ children }: PropsWithChildren<{}>) => {
  const [question, setQuestion] = useState<ContextType["question"]>(question_1);

  const onVoteQuestion = (isUpVote: boolean) => {
    if (isUpVote) {
      setQuestion({
        ...question,
        upVotes: [...question.upVotes, new Date().toISOString()],
      });
    } else {
      setQuestion({
        ...question,
        downVotes: [...question.downVotes, new Date().toISOString()],
      });
    }
  };

  const onVoteAnswer = (id: string, isUpVote: boolean) => {
    const index = question.answers.findIndex((answer) => answer.id === id);
    if (index >= 0) {
      setQuestion({
        ...question,
        answers: [
          ...question.answers.slice(0, index),
          {
            ...question.answers[index],
            upVotes: !isUpVote
              ? question.answers[index].upVotes
              : [...question.answers[index].upVotes, new Date().toISOString()],
            downVotes: isUpVote
              ? question.answers[index].downVotes
              : [
                  ...question.answers[index].downVotes,
                  new Date().toISOString(),
                ],
          },
          ...question.answers.slice(index + 1),
        ],
      });
    }
  };

  return (
    <QuestionContext.Provider
      value={{ question, onVoteQuestion, onVoteAnswer }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => {
  const context = useContext(QuestionContext);

  if (!context) {
    throw new Error(
      "useQuestionContext must be used inside the QuestionProvider"
    );
  }

  return context;
};
