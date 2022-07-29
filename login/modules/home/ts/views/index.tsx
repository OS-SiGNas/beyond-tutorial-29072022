import * as React from "react";
import { Auth } from "@testing/login/auth";

interface IForm {
  disabled?: boolean;
}
const model = new Auth();
export /*page*/
function View(): JSX.Element {
  const defaultValues = { username: "", password: "", fetching: false };
  const [values, setValues] = React.useState(defaultValues);
  const [error, setError] = React.useState();
  const handleChange = ({ currentTarget: target }) => {
    const currentValue = { ...values };
    currentValue[target.name] = target.value;
    setValues(currentValue);
  };
  const formDisabled: IForm = {};
  const { username, password } = values;
  if (!username || !password) {
    formDisabled.disabled = true;
  }
  const onSubmit = async (event: any) => {
    try {
      event.preventDefault();
      const response = await model.login(username, password);
      if (response.data?.valid) {
        console.log("valid data");
        return;
      }
      setError(response.error);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="page__container">
      <form onSubmit={onSubmit}>
        {error && <div className="form__error">{error}</div>}
        <label>User: </label>
        <input onChange={handleChange} type="text" name="username" />
        <label>Password</label>
        <input onChange={handleChange} type="password" name="password" />
        <div className="form__actions">
          <button onClick={onSubmit} {...formDisabled}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
