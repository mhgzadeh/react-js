import { Children, ReactNode } from "react";
interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <>
      <div className={"btn btn-" + color} onClick={onClick}>
        {children}
      </div>
      <br />
      <br />
    </>
  );
};

export default Button;
