import "./App.css";
import ExpenseTrackerWidget from "./components/ExpenseTrackerWidget";
import ExpenseStore from "./ExpenseContext";

function App() {
  return (
    <div className="app-container">
      <ExpenseStore>
        <ExpenseTrackerWidget></ExpenseTrackerWidget>
      </ExpenseStore>
    </div>
  );
}

export default App;
