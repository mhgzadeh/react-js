import { ReactNode, useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandeableText = ({ children, maxChars = 20 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= maxChars) {
    return <p>{children}</p>;
  }

  const text = children.substring(0, maxChars);

  return (
    <>
      <div>
        {isExpanded ? text : children}...
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "more" : "less"}
        </button>
        ;
      </div>
    </>
  );
};

export default ExpandeableText;
