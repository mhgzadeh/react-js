import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface Props {
  onLog: () => void;
}

const Like = ({ onLog }: Props) => {
  const [status, setStatus] = useState(true);
  const toggle = () => {
    setStatus(!status);
    onLog();
  };
  if (status)
    return <FaHeart color="#ff6b50" size={40} onClick={toggle}></FaHeart>;
  return <FaRegHeart size={40} color="#ff6b50" onClick={toggle}></FaRegHeart>;
};

export default Like;
