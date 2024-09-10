import { signInWithGooglePopup, createUserDoc } from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const result = await signInWithGooglePopup();
    // console.log(result);
    await createUserDoc(result.user);
  }
  return (
    <div>
      <h2>SIGN IN PAGE</h2>
      <button type="button" onClick={logGoogleUser}>Signin With Google</button>
    </div>
  );
}

export default SignIn;