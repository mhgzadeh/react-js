import ListGroup from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  let items = ["New York", "Berlin", "Tehran", "Tokyo"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [cartItems, setCardItems] = useState(["Product1", "Product2"]);

  const [alertVisibility, setAlertVisibillity] = useState(false);

  const [game, setGame] = useState({
    id: 1,
    player: { name: "John" },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    topping: ["Mushroom"],
  });

  const [card, setCard] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product1", quantity: 1 },
      { id: 2, title: "Product2", quantity: 1 },
    ],
  });

  const handelClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
    setPizza({ ...pizza, topping: [...pizza.topping, "chesse"] });
    setCard({
      ...card,
      items: card.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
    console.log(game, pizza, card);
  };

  return (
    <>
      <div>
        {alertVisibility && (
          <Alert
            onClose={() => {
              setAlertVisibillity(false);
            }}
          >
            Hello <span>World</span>
          </Alert>
        )}
        <Button
          color="danger"
          // onClick={() => {
          //   setAlertVisibillity(true);
          // }}
          onClick={handelClick}
        >
          Click on me
        </Button>
        <ListGroup
          items={items}
          headings="Cities"
          onSelectItem={handleSelectItem}
        />
        <Like
          onLog={() => {
            console.log("Clicked");
          }}
        ></Like>
        <NavBar itemCount={cartItems.length} />
        <Card
          cardsItems={cartItems}
          onClear={() => {
            setCardItems([]);
          }}
        />
      </div>
    </>
  );
}

export default App;
