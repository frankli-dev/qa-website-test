import { useQuery } from "react-query";
import axios from "axios";
import { Avatar } from "types";
import toast from "react-hot-toast";
function useOrgs(user?: string) {
    return useQuery<Avatar[], Error>(
        ["orgs", user],
        async () => {
            const { data } = await axios.get(
                `https://api.github.com/users/${user}/orgs`,
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
export default useOrgs;
