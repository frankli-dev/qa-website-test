import { useQuery } from "react-query";
import axios from "axios";
import { User } from "types";
import toast from "react-hot-toast";
function useUsers() {
    return useQuery<User[], Error>(
        "users",
        async () => {
            const { data } = await axios.get("https://api.github.com/users");
            return data;
        },
        {
            retry: false,
            onError: (err) => {
                toast.error(err.message);
            },
        },
    );
}
export default useUsers;
