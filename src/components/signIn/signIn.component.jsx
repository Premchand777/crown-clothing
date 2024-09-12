import { useState } from "react";
import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";
// import "../signUpForm/sign-up-form.styles.scss";
import { createUserDoc, signInWithEmailPassword, signInWithGooglePopup } from "../../utils/firebase.utils";

const defaultFormFields = {
  email: '',
  password: '',
}
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (formFields.password !== formFields.confirmPassword) {
      alert("password does not match");
      return;
    }
    try {
      const result = await signInWithEmailPassword(formFields.email, formFields.password);
      if (result.user) {
        alert('sign in successful');
      }
    } catch (error) {
        console.error(error.message);
    }
  }

  const logGoogleUser = async (event) => {
    event.preventDefault();
    const result = await signInWithGooglePopup();
    await createUserDoc(result.user);
  }

  return (
    <div>
      <h2>I already have an account</h2>
      <span>Signin with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        {/* <label htmlFor="dn">Display Name</label>
        <input type="text" name="displayName" id='dn' value={formFields.displayName} onChange={onChangeHandler} autoComplete='true' required /> */}
        <FormInput
          htmlFor='el1'
          label='Emal'
          type='email'
          name='email'
          id='el1'
          value={formFields.email}
          onChange={onChangeHandler}
          autoComplete='true'
          required
        />
        <FormInput
          htmlFor='pwd1'
          label='Password'
          type='password'
          name='password'
          id='pwd1'
          value={formFields.password}
          onChange={onChangeHandler}
          autoComplete='true'
          required
        />
        <Button type="submit" buttonType='inverted'>SIGN IN</Button>
      </form>
      <Button type="submit" buttonType='google' onClick={logGoogleUser}>SIGN IN WITH GOOGLE</Button>
    </div>
  );
}

export default SignInForm;