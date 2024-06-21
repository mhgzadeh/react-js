import { useState } from "react";
interface Props {
  items: string[];
  headings: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, headings, onSelectItem }: Props) {
  // Hock
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{headings}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
