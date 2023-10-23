import useUser from "./useUser";
import useFollowers from "./useFollowers";
import useOrgs from "./useOrgs";
import useRepos from "./useRepos";
function useDetail(login?: string) {
    const user = useUser(login);
    const repos = useRepos(login);
    const followers = useFollowers(login);
    const orgs = useOrgs(login);

    const isLoading =
        user.isLoading ||
        repos.isLoading ||
        followers.isLoading ||
        orgs.isLoading;
    const isSuccess =
        user.isSuccess &&
        repos.isSuccess &&
        followers.isSuccess &&
        orgs.isSuccess;
    const isError =
        user.isError || repos.isError || followers.isError || orgs.isError;
    return {
        isLoading,
        isSuccess,
        isError,
        user: user.data,
        repos: repos.data,
        followers: followers.data?.slice(0, 5),
        orgs: orgs.data,
    };
}
export default useDetail;
