import { Button } from "./Button";

export const Header = () => {
  return (
    <div className="fixed flex h-header top-0 left-0 w-full bg-white border-t-2 border-t-primary border-b border-b-black-225 items-center z-[100]">
      <div className="w-[80rem] flex mx-auto my-0 items-center">
        <a
          href="https://stackoverflow.com"
          className="flex items-center justify-center py-0 px-1"
        >
          <span
            className="bg-sprites w-[150px] h-[30px] mt-[-4px] ml-0 inline-block "
            style={{ backgroundPosition: "0 -500px" }}
          />
        </a>
        <Button variant="outlined" text="Log in" className="ml-auto" />
        <Button variant="filled" text="Sign up" className="ml-2 mr-2" />
      </div>
    </div>
  );
};
