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
  vote: number;
  createdAt: string;
  updatedAt: string;
  user: User;
};

export type Answer = {
  id: string;
  vote: number;
  user: User;
  answeredAt: string;
  content: string;
  comments: Comment[];
};

export type Question = {
  id: string;
  title: string;
  view: number;
  vote: number;
  user: User;
  tags: string[];
  askedAt: string;
  lastEditedAt: string;
  content: string;
  answers: Answer[];
  comments: Comment[];
};
