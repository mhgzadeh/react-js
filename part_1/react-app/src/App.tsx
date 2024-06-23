import ListGroup from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "Berlin", "Tehran", "Tokyo"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisibility, setAlertVisibillity] = useState(false);
  return (
    <>
      <div>
        {alertVisibility && (
          <Alert onClose={() => {
            setAlertVisibillity(false)
          }}> 
            Hello <span>World</span>
          </Alert>
        )}
        <Button
          color="danger"
          onClick={() => {
            setAlertVisibillity(true);
          }}
        >
          Click on me
        </Button>
        <ListGroup
          items={items}
          headings="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
}

export default App;
