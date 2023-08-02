import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {title: "Car Volvo", amount: 37.87, date: new Date(2021, 2, 28)},
    {title: "Car Toyota", amount: 52.97, date: new Date(2021, 0, 10)},
    {title: "Car Mazda", amount: 42.99, date: new Date(2021, 6, 14)},
  ];

  return (
    <div>
      <h1>This is my main app</h1>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />

    </div>
  );
}

export default App;
