import ExpenseList from "./components/ExpenseList";

function App() {
  const expenses = [
    { id: 1, description: "aaa", amount: 10, category: "utility" },
    { id: 2, description: "bbb", amount: 10, category: "utility" },
    { id: 3, description: "ccc", amount: 10, category: "utility" },
    { id: 4, description: "ddd", amount: 10, category: "utility" },
  ];
  return (
    <div className="container">
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
