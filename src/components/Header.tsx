export const Header = () => {
  return (
    <div className="fixed flex h-header top-0 left-0 w-full border-t-2 border-t-primary border-b border-b-black-225 items-center">
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
        <button className="ml-auto px-2 py-1 border border-secondary rounded-md text-secondary hover:bg-blue-200">
          Log in
        </button>
        <button className="ml-4 px-2 py-1 border bg-secondary border-secondary rounded-md text-white hover:bg-blue-500">
          Sign up
        </button>
      </div>
    </div>
  );
};
