import { useNavigate } from "react-router-dom";
import Avatar from "components/Avatar";
import useUsers from "hooks/useUsers";
import Fallback from "components/Fallback";
import ErrorFallback from "components/ErrorFallback";
import Wrapper from "components/Wrapper";

const Home = () => {
    const navigate = useNavigate();
    const { isLoading, data: users, isSuccess, isError } = useUsers();

    return (
        <Wrapper isErrors={[isError]} isLoading={isLoading} isSuccess={isSuccess} >
            <div
                className={
                    "bg-white text-white rounded-xl mt-6 flex shadow-2xl flex-col container self-center py-20"
                }
            >
                <div className="text-xl text-gray text-center font-bold mb-10">
                    Github User profiles
                </div>
                <div className="flex flex-wrap items-center justify-center">
                    {users?.map((item: any) => (
                        <Avatar
                            key={item.url}
                            src={item.avatar_url}
                            title={item.login}
                            onClick={() => navigate(`/profile/${item.login}`)}
                        />
                    ))
                    }
                </div>
            </div>
        </Wrapper>
    );
};

export default Home;
