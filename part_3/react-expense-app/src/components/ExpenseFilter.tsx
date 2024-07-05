interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => {
        onSelectCategory(event.target.value);
        console.log(event);
        console.log(event.target.value);
      }}
    >
      <option value="">All categories</option>
      <option value="grocery">Groceries</option>
      <option value="utility">Utilities</option>
      <option value="entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
