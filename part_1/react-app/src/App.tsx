import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Berlin", "Tehran", "Tokyo"]
  return (
    <div>
      <ListGroup items={items} headings="Cities"/>
    </div>
  );
}

export default App;
