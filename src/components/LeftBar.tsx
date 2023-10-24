const navItems = [
  "Home",
  "Questions",
  "Tags",
  "Users",
  "Companies",
  "Explore Collectives",
  "Discussions",
];
export const LeftBar = () => {
  return (
    <div className="w-left-bar shrink-0 relative">
      <div className="sticky w-auto mb-1 overflow-y-auto top-header max-h-content-y">
        <nav>
          <ol className="p-0 mb-1.5 list-none mt-4">
            {navItems.map((nav) => (
              <li key={nav} className="mb-3">
                <a className="pl-1 text-sm text-black-500" href="/">
                  {nav}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};
