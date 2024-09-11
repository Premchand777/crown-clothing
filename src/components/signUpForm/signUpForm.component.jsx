import { useState } from "react";
import { createAuthUserWithEmailPassword, createUserDoc } from '../../utils/firebase.utils';
import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";
import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
const SignUpForm = () => {
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
      const result = await createAuthUserWithEmailPassword(formFields.email, formFields.password);
      result.user.displayName = formFields.displayName;
      await createUserDoc(result.user);
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert("Email already is in use");
      }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Signup with Email and Password</span>
      <form onSubmit={onSubmitHandler}>
        {/* <label htmlFor="dn">Display Name</label>
        <input type="text" name="displayName" id='dn' value={formFields.displayName} onChange={onChangeHandler} autoComplete='true' required /> */}
        <FormInput
          htmlFor='dn'
          label='Display Name'
          type='text'
          name='displayName'
          id='dn'
          value={formFields.displayName}
          onChange={onChangeHandler}
          autoComplete='true'
          required
        />
        <FormInput
          htmlFor='el'
          label='Email'
          type='email'
          name='email'
          id='el'
          value={formFields.email}
          onChange={onChangeHandler}
          autoComplete='true'
          required
        />
        <FormInput
          htmlFor='pwd'
          label='Password'
          type='password'
          name='password'
          id='pwd'
          value={formFields.password}
          onChange={onChangeHandler}
          autoComplete='true'
          required
        />
        <FormInput
          htmlFor='cpwd'
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          id='cpwd'
          value={formFields.confirmPassword}
          onChange={onChangeHandler}
          autoComplete='true'
          required
        />
        <Button type="submit">Signup</Button>
      </form>
    </div>
  );
}

export default SignUpForm;