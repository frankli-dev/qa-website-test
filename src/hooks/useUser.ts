import { useQuery } from "react-query";
import axios from "axios";
import { User } from "types";
import toast from "react-hot-toast";
function useUser(user?: string) {
    return useQuery<User, Error>(
        ["user", user],
        async () => {
            const { data } = await axios.get(
                `https://api.github.com/users/${user}`,
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
export default useUser;
