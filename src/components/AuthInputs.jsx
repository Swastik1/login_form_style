import { useState } from "react";
import { styled } from "styled-components";
import ButtonStyled from "./Button.jsx";
import CustomInput from "./Input.jsx";

const ControlDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlDiv>
        <CustomInput
          label="Email"
          type="email"
          $invalid={emailNotValid}
          onChange={(event) => handleInputChange("email", event.target.value)}
          // style={{
          //   backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db",
          // }}
        />

        <CustomInput
          label="Password"
          type="password"
          $invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </ControlDiv>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <ButtonStyled className="button" onClick={handleLogin}>
          Sign In
        </ButtonStyled>
      </div>
    </div>
  );
}
