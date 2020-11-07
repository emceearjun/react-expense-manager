import React from "react";
import { TransactionTypes } from "../TransactionTypes";
import "./TransactionItem.scss";

function TransactionItem(props) {
  const type = props.transaction.type;
  const amount = props.transaction.amount;
  const description = props.transaction.description;
  const sign = props.transaction.type === TransactionTypes.EXPENSE ? "-" : "+";
  return (
    <li className={`transaction-item ${type}`}>
      <span className="transaction type">{description}</span>
      <span className="transaction amount">
        {sign} ${Math.abs(amount)}
      </span>
    </li>
  );
}

export default TransactionItem;
