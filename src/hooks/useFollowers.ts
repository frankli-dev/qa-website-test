import { useQuery } from "react-query";
import axios from "axios";
import { Avatar } from "types";
import toast from "react-hot-toast";
function useFollowers(user?: string) {
    return useQuery<Avatar[], Error>(
        ["followers", user],
        async () => {
            const { data } = await axios.get(
                `https://api.github.com/users/${user}/followers`,
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
export default useFollowers;
