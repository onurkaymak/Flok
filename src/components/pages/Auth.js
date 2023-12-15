import { useState } from "react";
import SignInForm from "../auth/SignInForm";
import SignUpForm from "../auth/SignUpForm";

const Auth = () => {
  const [authForm, setAuthForm] = useState(false);

  const buttonHandler = () => {
    setAuthForm(true);
  };

  return (
    (!authForm) ? <SignInForm onCreateAccount={buttonHandler} /> : <SignUpForm />
  )
};

export default Auth;