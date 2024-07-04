interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Prop {
  expenses: Expense[];
  onDelete: (id:number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Prop) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <th>{expense.description}</th>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button className="btn btn-outline-danger" onClick={() => onDelete(expense.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
