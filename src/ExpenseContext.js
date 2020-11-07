import { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

const ExpenseState = {
  transactions: [],
  balance: 0,
  expenses: 0,
  income: 0,
};

const ExpenseStore = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, ExpenseState);

  return (
    <ExpenseContext.Provider value={[state, dispatch]}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const ExpenseContext = createContext(ExpenseState);

export default ExpenseStore;
