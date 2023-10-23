import { useNavigate, useParams } from "react-router-dom";
import useDetail from "hooks/useDetail";
import Fallback from "components/Fallback";
import ErrorFallback from "components/ErrorFallback";
import Avatar from "components/Avatar";
import RepoCard from "components/RepoCard";
import ProfileInfo from "components/ProfileInfo";

const Profile = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { isLoading, user, repos, followers, orgs, isError } =
        useDetail(params.username);
    if (!params.username || isError) return <ErrorFallback />;
    if (isLoading) return <Fallback />;
    return (
        <div
            className={
                "bg-white text-white rounded-xl mt-6 flex shadow-2xl flex-col container self-center"
            }
        >
            {!user ? (
                <div>No profile information</div>
            ) : (
                <ProfileInfo profile={user} />
            )}
            <h1 className="text-dark-navy-blue-2 text-center text-xl">
                Top 5 followers
            </h1>
            <div className="flex text-navy-blue-2 mt-6 480:mt-10 text-xs 480:text-base lg:mt-3 justify-center flex-wrap mb-4">
                {!followers || followers.length === 0
                    ? "No Followers"
                    : followers?.map((item) => (
                          <Avatar
                              key={item.url}
                              src={item.avatar_url}
                              title={item.login}
                              onClick={() => navigate(`/profile/${item.login}`)}
                          />
                      ))}
            </div>
            <h1 className="text-dark-navy-blue-2 text-center text-xl">
                Organizations
            </h1>
            <div className="flex text-navy-blue-2 mt-6 480:mt-10 text-xs 480:text-base lg:mt-3 justify-center mx-4 flex-wrap mb-4">
                {!orgs || orgs.length === 0
                    ? "No orgnizations"
                    : orgs.map((item) => (
                          <Avatar
                              key={item.url}
                              src={item.avatar_url}
                              title={item.login}
                              onClick={() =>
                                  (window.location.href = `https://github.com/${item.login}`)
                              }
                          />
                      ))}
            </div>
            <h1 className="text-dark-navy-blue-2 text-center text-xl">
                Repositories
            </h1>
            <div className="flex flex-col text-navy-blue-2 mt-6 480:mt-10 text-xs 480:text-base lg:mt-3 justify-center mx-4">
                {!repos || repos.length === 0
                    ? "No Repositories"
                    : repos?.map((item) => (
                          <RepoCard key={item.url} repo={item} />
                      ))}
            </div>
        </div>
    );
};

export default Profile;
