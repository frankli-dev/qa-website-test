import { Answer, SortedBy } from "types";

const compareAnswersByScore = (a: Answer, b: Answer): number => {
  const aVote = a.upVotes.length - a.downVotes.length;
  const bVote = b.upVotes.length - b.downVotes.length;

  return aVote > bVote ? -1 : aVote < bVote ? 1 : 0;
};

const compareAnswersByTrending = (a: Answer, b: Answer): number => {
  const getVoteScoreByTrending = (ans: Answer): number => {
    let score = 0;
    const untilNow = new Date().getTime() - new Date(ans.createdAt).getTime();
    ans.upVotes.forEach((date) => {
      const passed =
        new Date(date).getTime() - new Date(ans.createdAt).getTime();
      score += (passed * 100.0) / untilNow;
    });
    ans.downVotes.forEach((date) => {
      const passed =
        new Date(date).getTime() - new Date(ans.createdAt).getTime();
      score -= (passed * 100.0) / untilNow;
    });
    return score;
  };

  const aVote = getVoteScoreByTrending(a);
  const bVote = getVoteScoreByTrending(b);

  return aVote > bVote ? -1 : aVote < bVote ? 1 : 0;
};

const compareAnswers = (a: Answer, b: Answer, sortedBy: string): number => {
  switch (sortedBy) {
    case SortedBy.Score:
      return compareAnswersByScore(a, b);
    case SortedBy.Trending:
      return compareAnswersByTrending(a, b);
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
  }
  return 0;
};

export { compareAnswers };
