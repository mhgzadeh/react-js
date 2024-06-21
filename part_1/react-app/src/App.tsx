import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Berlin", "Tehran", "Tokyo"]
  const handleSelectItem = (item: string) => {
    console.log(item); 
  }
  return (
    <div>
      <ListGroup items={items} headings="Cities" onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;
