import classNames from "classnames";

interface ButtonProps {
  variant: "filled" | "outlined";
  text: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant, text, className }) => {
  if (variant === "filled") {
    return (
      <button
        className={classNames(
          "text-[13px] px-2 py-1 border bg-secondary border-secondary rounded-md text-white hover:bg-blue-500",
          className
        )}
      >
        {text}
      </button>
    );
  }
  return (
    <button
      className={classNames(
        "text-[13px] px-2 py-1 border border-secondary rounded-md text-secondary hover:bg-blue-200",
        className
      )}
    >
      {text}
    </button>
  );
};
