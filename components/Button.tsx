import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  extraClass: string;
}

function Button({ onClick, children, extraClass }: ButtonProps) {
  return (
    <button onClick={onClick} className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ${extraClass}`} >
      {children}
    </button >
  );
}

export default Button;
