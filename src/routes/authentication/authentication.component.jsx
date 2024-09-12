// import { signInWithGooglePopup, createUserDoc } from "../../utils/firebase.utils";
import SignUpForm from '../../components/signUpForm/signUpForm.component';
import SignInForm from "../../components/signIn/signIn.component";
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='auth-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;