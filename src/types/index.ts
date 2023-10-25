export type User = {
  id: string;
  name: string;
  reputation: number;
  gold: number;
  silver: number;
  bronze: number;
};

export type Comment = {
  id: string;
  upVotes: string[];
  downVotes: string[];
  createdAt: string;
  updatedAt: string;
  user: User;
};

export type Answer = {
  id: string;
  upVotes: string[];
  downVotes: string[];
  user: User;
  content: string;
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
};

export type Question = {
  id: string;
  title: string;
  view: number;
  upVotes: string[];
  downVotes: string[];
  user: User;
  tags: string[];
  askedAt: string;
  updatedAt: string;
  content: string;
  answers: Answer[];
  comments: Comment[];
};

export enum SortedBy {
  Score = "score",
  Trending = "trending",
  Modified = "modified",
  Created = "created",
}
