import React, { useContext } from "react";
import { ExpenseContext } from "../ExpenseContext";
import "./ExpenseTrackerWidget.scss";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

function ExpenseTrackerWidget() {

  const [state, dispatch] = useContext(ExpenseContext);

  return (
    <div className="expense-widget">
      <div className="balance">
        <h3 className="title">Balance</h3>
        <span className="amount">${state.balance}</span>
      </div>
      <div className="totals">
        <div className="total income">
          <span className="amount">${state.income}</span>
          <h3 className="title">Income</h3>
        </div>
        <span className="separator"></span>
        <div className="total expenses">
          <span className="amount">${state.expenses}</span>
          <h3 className="title">Expenses</h3>
        </div>
      </div>
      <div className="transaction-list-container">
        <TransactionList />
        <TransactionForm />
      </div>
    </div>
  );
}

export default ExpenseTrackerWidget;
