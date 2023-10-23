type Props = {
    src: string;
    title: string;
    onClick: () => void;
};

const Avatar = ({ src, title, onClick }: Props) => {
    return (
        <div
            onClick={onClick}
            className="flex justify-center items-center mb-4 text-gray flex-col mx-6 cursor-pointer"
        >
            <img
                src={src}
                data-testid="avatar"
                className="flex-shrink-0 w-12 lg:w-24 rounded-full self-center"
                alt={title}
            />
            <span>{title}</span>
        </div>
    );
};

export default Avatar;
