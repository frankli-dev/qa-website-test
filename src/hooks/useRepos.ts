import { useQuery } from "react-query";
import axios from "axios";
import { Repo } from "types";
import toast from "react-hot-toast";
function useRepos(user?: string) {
    return useQuery<Repo[], Error>(
        ["repos", user],
        async () => {
            const { data } = await axios.get(
                `https://api.github.com/users/${user}/repos`,
            );
            return data;
        },
        {
            enabled: !!user,
            retry: false,
            onError: (err) => {
                toast.error(err.message);
            },
        },
    );
}
export default useRepos;
