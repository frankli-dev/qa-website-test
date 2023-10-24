import { User } from "types";

interface UserElementProps {
  user: User;
  headline: string;
  highlighted?: boolean;
}

export const UserElement: React.FC<UserElementProps> = ({
  headline,
  user,
  highlighted = false,
}) => {
  return (
    <div className="flex flex-col pt-[5px] pr-[6px] pb-[7px] pl-[7px] text-black-400 bg-blue-200 rounded-[4px] w-[200px]">
      <div>{headline}</div>
      <div className="flex items-center">
        <img
          src={`https://www.gravatar.com/avatar/${user.id}?s=256&d=identicon&r=PG`}
          width={32}
          height={32}
          className="rounded-[4px] mr-2"
          alt="user"
        />
        <div className="flex flex-col">
          <div className="text-blue-500">{user.name}</div>
          <div className="flex items-center">
            <span className="font-bold">
              {user.reputation.toLocaleString()}
            </span>
            <span
              className="bg-sprites w-[6px] h-[12px] mr-[3px] ml-[6px] inline-block "
              style={{ backgroundPosition: "-102px -398px" }}
            />
            {user.gold}
            <span
              className="bg-sprites w-[6px] h-[12px] mr-[3px] ml-[6px] inline-block "
              style={{ backgroundPosition: "-82px -398px" }}
            />
            {user.silver}
            <span
              className="bg-sprites w-[6px] h-[12px] mr-[3px] ml-[6px] inline-block "
              style={{ backgroundPosition: "-62px -398px" }}
            />
            {user.bronze}
          </div>
        </div>
      </div>
    </div>
  );
};
