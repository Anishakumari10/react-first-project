
import ExpenseList from "../../components/ExpenseList";
import UseExpenses from "../../hooks/useExpenses";


const Dashboard = () => {
    const {expenses, errors, isLoading } = UseExpenses();
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {errors &&<p>{errors}</p>}
          <ExpenseList expenses={expenses} />
        </div>
      ); 
};

export default Dashboard;
