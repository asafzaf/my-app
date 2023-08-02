import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>July 24th, 2023</div>
      <div className='expense-item__description'>
        <h2>Car</h2>
        <div className='expense-item__price'>49.99$</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
