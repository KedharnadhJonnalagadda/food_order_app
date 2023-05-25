import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from 'react';


const MealItemForm = (props) => {

    const [amountIsValid,setAmountIsValid]=useState(true)
    const amountInputRef=useRef();
    var submitHandiler=(event)=>{
        event.preventDefault();

        const enteredAmount=amountInputRef.current.value;
        const enteredAmountNumber= +enteredAmount;

        if(enteredAmount.trim().length===0 || enteredAmountNumber<0 || enteredAmountNumber>5){
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }

  return (
    <form className={classes.form} onSubmit={submitHandiler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          min: 1,
          max: 5,
          type: "number",
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter a valid amount (1 - 5).</p>}
    </form>
  );
};
export default MealItemForm;