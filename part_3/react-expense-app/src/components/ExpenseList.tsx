interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Prop {
  expenses: Expense[];
}

const ExpenseList = ({ expenses }: Prop) => {
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
        {expenses.map((expense) => 
          <tr key={expense.id}>
            <th>{expense.description}</th>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
                <button className="btn btn-outline-danger">Delete</button>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ExpenseList;
