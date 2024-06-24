import React from "react";

interface Props {
  cardsItems: string[];
  onClear: () => void;
}

const Card = ({ cardsItems, onClear }: Props) => {
  return (
    <>
      <div>Card</div>
      <ul>
        {cardsItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}></button>
    </>
  );
};

export default Card;
