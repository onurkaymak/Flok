import { useState } from "react";
import SignInForm from "../auth/SignInForm";
import SignUpForm from "../auth/SignUpForm";

const Auth = () => {
  const [authForm, setAuthForm] = useState(false);

  const showAuthFormHandler = () => {
    setAuthForm(prevState => !prevState);
  };

  return (
    (!authForm) ? <SignInForm onCreateAccountButton={showAuthFormHandler} /> : <SignUpForm onCreateAccount={showAuthFormHandler} />
  )
};

export default Auth;