import { Comment, User } from "types";
import { ReactComponent as ArrowUpIcon } from "../icons/arrowUp.svg";
import { ReactComponent as ArrowDownIcon } from "../icons/arrowDown.svg";
import { ReactComponent as BookmarkIcon } from "../icons/bookmark.svg";
import { ReactComponent as ActivityIcon } from "../icons/activity.svg";
import { UserElement } from "./UserElement";

interface QuestionAnswerItemProps {
  vote: number;
  content: string;
  tags: string[];
  editedAt: string;
  user: User;
  comments: Comment[];
}

export const QuestionAnswerItem: React.FC<QuestionAnswerItemProps> = ({
  vote,
  content,
  tags,
  editedAt,
  user,
  comments,
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-start items-center pr-4">
        <button className="text-black-500 border border-black-225 rounded-full hover:bg-blue-200 p-2.5">
          <ArrowUpIcon />
        </button>
        <span className="text-black-600 text-subHeading font-bold p-2">
          {vote}
        </span>
        <button className="text-black-500 border border-black-225 rounded-full hover:bg-blue-200 p-2.5">
          <ArrowDownIcon />
        </button>
        <a className="text-black-500 hover:color-blue-200 p-2 mt-2" href="/">
          <BookmarkIcon />
        </a>
        <a className="text-black-500 hover:color-blue-200 p-2" href="/">
          <ActivityIcon />
        </a>
      </div>
      <div className="flex flex-col pr-4 w-auto min-w-0">
        <div
          className="text-[15px] break-words"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="flex my-6">
          {tags.map((tag, index) => (
            <a
              key={index}
              className="inline mr-[4px] px-[0.5em] py-[0.4em] rounded-md leading-none text-blue-600 bg-blue-100"
              href="/"
            >
              {tag}
            </a>
          ))}
        </div>
        <div className="flex mt-4 mb-8">
          <a href="/" className="text-black-400 mr-2">
            Share
          </a>
          <a href="/" className="text-black-400">
            Follow
          </a>
          <a href="/" className="ml-auto text-blue-500 mr-8">
            edited Feb 4, 2016 at 13:39
          </a>
          <UserElement user={user} headline="asked Feb 4, 2016 at 10:15" />
        </div>
        <div className="flex">
          <a href="/" className="text-black-300">
            Add a comment
          </a>
        </div>
      </div>
    </div>
  );
};
