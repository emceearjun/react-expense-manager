import React, { useContext, useState } from "react";
import { ExpenseActions } from "../ExpenseActions";
import { ExpenseContext } from "../ExpenseContext";
import { TransactionTypes } from "../TransactionTypes";
import "./TransactionForm.scss";

function TransactionForm() {
  const [formState, setFormState] = useState({
    amount: 0,
    description: "",
  });

  const [state, dispatch] = useContext(ExpenseContext);
  let descInputRef;

  function onSubmit(e) {
    e.preventDefault();

    dispatch({
      type: ExpenseActions.ADD_TRANSACTION,
      payload: {
        ...formState,
        type:
          formState.amount < 0
            ? TransactionTypes.EXPENSE
            : TransactionTypes.INCOME,
      }
    });
    setFormState({
      amount: 0,
      description: "",
    });

    descInputRef.focus();
  }

  return (
    <form className="transaction-form" onSubmit={onSubmit}>
      <legend>Add Transaction</legend>
      <fieldset>
        <div className="form-field">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={formState.description}
            ref={(ref) => descInputRef = ref}
            onChange={(e) =>
              setFormState({ ...formState, description: e.target.value })
            }
            id="description"
            required
            autoComplete="off"
          />
        </div>
        <div className="form-field">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            value={formState.amount === 0 ? "" : +formState.amount}
            onChange={(e) =>
              setFormState({ ...formState, amount: +e.target.value })
            }
            id="amount"
            required
            autoComplete="off"
          />
        </div>
        <input type="submit" />
      </fieldset>
    </form>
  );
}

export default TransactionForm;
