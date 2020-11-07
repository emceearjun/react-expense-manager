import { TransactionTypes } from "./TransactionTypes";

const { ExpenseActions } = require("./ExpenseActions");

function ExpenseReducer(state, action) {
  switch (action.type) {
    case ExpenseActions.ADD_TRANSACTION:
      return {
        balance: state.balance + action.payload.amount,
        expenses: action.payload.type === TransactionTypes.EXPENSE ? (state.expenses + Math.abs(action.payload.amount)) : state.expenses,
        income: action.payload.type === TransactionTypes.INCOME ? (state.income + Math.abs(action.payload.amount)) : state.income,
        transactions: [...state.transactions, action.payload]
      };
    case ExpenseActions.ADD_EXPENSE:
      return {
        ...state,
        expenses: state.expenses + action.amount,
      };
    default:
      return state;
  }
}

export default ExpenseReducer;
