import { useEffect, useState } from "react";
import { getExpenses } from "../service/Expense-service";
import { Expense } from "../model/Expense";

const UseExpenses = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [errors, setError] = useState(null);
    const [isLoading, setLoader] = useState(false);
  useEffect(() => {
    //api call to the backend system
    setLoader(true);
        getExpenses()
        .then((response) => {
        setExpenses(response.data);
      })
      .catch((errors) => setError(errors.message))
      .finally(() => setLoader(false));
  }, []);
  return {expenses,errors,isLoading}
}

export default UseExpenses;