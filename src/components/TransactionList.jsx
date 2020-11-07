import React, { useContext } from "react";
import { ExpenseContext } from "../ExpenseContext";
import TransactionItem from "./TransactionItem";
import "./TransactionList.scss";

function TransactionList() {

  const [state, dispatch] = useContext(ExpenseContext);

  function RenderList() {
    if (state.transactions.length > 0) {
      return (
        <ul>
          {state.transactions.map((transaction, idx) => {
            return <TransactionItem transaction={transaction} key={idx} />;
          })}
        </ul>
      );
    } else {
      return <div className="no-transactions-message">No transactions available yet</div>;
    }
  }

  return (
    <div className="transaction-list-inner-container">
      <RenderList />
    </div>
  );
}

export default TransactionList;
