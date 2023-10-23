import React from "react";

type PropsType = {
    children?: React.ReactNode;
    className?: string;
} & React.ComponentPropsWithoutRef<"div">;

const Layout = React.forwardRef(
    (props: PropsType, forwardedRef: React.Ref<HTMLDivElement>) => {
        const { children, className, ...rest } = props;
        return (
            <div
                ref={forwardedRef}
                className="bg-dark-navy-blue w-full min-h-screen flex flex-col justify-center items-center py-20"
                {...rest}
            >
                {children}
            </div>
        );
    },
);

export default Layout;
