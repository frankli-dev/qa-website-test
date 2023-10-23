import { convertdate } from "utils/date";
import { User } from "types";

const ProfileInfo = ({ profile }: { profile: User }) => {
    const newDate = convertdate(new Date(profile.created_at));
    return (
        <div className={"flex"}>
            <img
                src={profile.avatar_url}
                alt="avatar"
                className="flex-shrink-0 w-16 mx-6 my-8 self-baseline 480:w-24 480:mx-8 lg:w-32 rounded-full"
            />
            <div className="my-8 mr-4 w-full">
                <div className="flex flex-col mr-3 lg:flex-row lg:items-baseline lg:justify-between">
                    <div>
                        <p
                            className={
                                "text-dark-navy-blue-2 font-bold text-lg 480:text-2xl -mb-2 480:mb-1"
                            }
                        >
                            {profile.name == null
                                ? profile.login
                                : profile.name}
                        </p>
                        <a
                            href={`https://github.com/${profile.login}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue mb-1 text-xs break-all hover:underline active:underline 480:text-base"
                        >
                            @{profile.login}
                        </a>
                    </div>
                    <p className={"text-gray text-xs 480:text-base"}>
                        Joined {newDate}
                    </p>
                </div>
                <div className="mt-6 480:mt-10 -ml-20 text-xs 480:text-base lg:ml-0 lg:mt-3">
                    <p
                        className={`mr-4 480:-ml-12 leading-loose lg:ml-0 ${
                            profile.bio != null
                                ? "text-dark-navy-blue-2"
                                : "text-grayish-blue"
                        }`}
                    >
                        {profile.bio != null
                            ? profile.bio
                            : "This profile has no bio"}
                    </p>
                    <div
                        className={
                            "flex mr-4 justify-around mt-8 480:-ml-12 rounded-xl py-4 lg:ml-0 bg-whitish-blue text-gray"
                        }
                    >
                        <div className="flex flex-col">
                            <p>Repos</p>
                            <p
                                className={
                                    "font-bold text-lg 480:text-2xl mx-auto sm:mx-0 text-dark-navy-blue-2"
                                }
                            >
                                {profile.public_repos}
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p>Followers</p>
                            <p
                                className={
                                    "font-bold text-lg 480:text-2xl mx-auto sm:mx-0 text-dark-navy-blue-2"
                                }
                            >
                                {profile.followers}
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p>Following</p>
                            <p
                                className={
                                    "font-bold text-lg 480:text-2xl mx-auto sm:mx-0 text-dark-navy-blue-2"
                                }
                            >
                                {profile.following}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
