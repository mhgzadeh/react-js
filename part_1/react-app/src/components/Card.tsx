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
      <button onClick={onClear}>Clear Products</button>
    </>
  );
};

export default Card;
