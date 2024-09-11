import { signInWithGooglePopup, createUserDoc } from "../../utils/firebase.utils";
import SignUpForm from '../../components/signUpForm/signUpForm.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const result = await signInWithGooglePopup();
    await createUserDoc(result.user);
  }
  return (
    <div>
      <h2>SIGN IN PAGE</h2>
      <button type="button" onClick={logGoogleUser}>Signin With Google</button>
      <SignUpForm />
    </div>
  );
}

export default SignIn;