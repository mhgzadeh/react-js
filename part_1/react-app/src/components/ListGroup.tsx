function ListGroup() {
  let items = ["New York", "Tehran", "Berlin", "Stuttgart", "Londen"];
  items = [];

  return (
    <>
      <h1>List Items</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
