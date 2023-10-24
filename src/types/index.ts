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
  created_at: string;
  updated_at: string;
  user: User;
};

export type Answer = {
  id: string;
  vote: number;
  user: User;
  answered_at: string;
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
  asked_at: string;
  last_edited_at: string;
  content: string;
  answers: Answer[];
  comments: Comment[];
};
