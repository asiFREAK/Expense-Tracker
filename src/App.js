import ExpenseItem from "./components/ExpenseItem";

function App() {
  let expenses = [
    {
      id: 'e1',
      title: 'school Fee',
      amount: 250,
      date: new Date(2021, 1, 20)
    },
    {
      id: 'e2',
      title: 'Books',
      amount: 230,
      date: new Date(2021, 5, 22)
    },
    {
      id: 'e3',
      title: 'Rent',
      amount: 400,
      date: new Date(2021, 2, 17)
    },
    {
      id: 'e4',
      title: 'Food',
      amount: 300,
      date: new Date(2021, 3, 13)
    },
  ]
  return (
    <div>
      <h2>Let's Go</h2>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
