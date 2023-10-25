import { ReactComponent as PenIcon } from "../icons/pen.svg";
const navItems: { text: string; isSub: boolean }[] = [
  { text: "The Overflow Blog", isSub: false },
  { text: "Privacy in the age of generative AI", isSub: true },
  { text: "Featured on Meta", isSub: false },
  { text: "Practical efforts of the October 2023", isSub: true },
  { text: "New colors launched", isSub: true },
  {
    text: "Temporary policy: Generative AI (e.g., ChatGPT) is banned",
    isSub: true,
  },
  { text: "Expanding Discussions: Let's talk about curation", isSub: true },
];
export const SideBar = () => {
  return (
    <div className="w-side-bar shrink-0 relative ">
      <div className="mb-[16px] border border-yellow-300 bg-yellow-100 rounded-[4px] text-[13px] relative">
        {navItems.map((nav, index) =>
          nav.isSub ? (
            <div
              key={index}
              className="bg-yellow-100 my-[12px] px-[16px] flex items-center"
            >
              <span className="mr-2 flex items-center justify-center">
                <PenIcon />
              </span>
              {nav.text}
            </div>
          ) : (
            <div
              key={index}
              className="text-[12px] font-bold bg-yellow-200 border border-yellow-300 py-[12px] px-[15px]"
            >
              {nav.text}
            </div>
          )
        )}
      </div>
    </div>
  );
};
