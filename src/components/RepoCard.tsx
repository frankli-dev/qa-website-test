import { Repo } from "types";

const RepoCard = ({ repo }: { repo: Repo }) => {
    return (
        <div
            className={
                "cursor-pointer flex repos-center px-6 py-4 bg-whitish-blue text-navy-blue-2 rounded-md mb-4 flex-col md:flex-row space-y-4 md:space-y-0  items-center"
            }
        >
            <div className="flex-auto self-start">
                <h1 className="text-xl font-bold">
                    <span>{repo.name}</span>
                    <span className="text-white bg-blue ml-2 rounded-full text-sm px-4">
                        {repo.language ? repo.language : "Readme"}
                    </span>
                </h1>
                <h3
                    className={`my-2 ${
                        repo.description != null
                            ? "text-dark-navy-blue-2"
                            : "text-grayish-blue"
                    }`}
                >
                    {repo.description
                        ? repo.description
                        : "No description provided."}
                </h3>
            </div>
            <a
                href={repo.html_url}
                className="text-center text-red border border-red rounded-full capitalize hover:bg-red hover:text-white px-4 py-1 transparent h-fit min-w-max"
            >
                View Repo
            </a>
        </div>
    );
};

export default RepoCard;
