import { useState } from "react";

import Button from "./Button";
import CustomInput from "./Input";

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
        <div
            id="auth-inputs"
            className="w-full mx-auto max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-600 to-stone-800"
        >
            <div className="flex gap-4 flex-col mb-6">
                <CustomInput
                    labelText="Email"
                    invalid={emailNotValid}
                    onChange={(event) =>
                        handleInputChange("email", event.target.value)
                    }
                    type="email"
                />
                <CustomInput
                    labelText="Password"
                    invalid={passwordNotValid}
                    onChange={(event) =>
                        handleInputChange("password", event.target.value)
                    }
                    type="password"
                />
            </div>
            <div className="flex justify-end gap-4">
                <button
                    type="button"
                    className="text-amber-400 hover:text-amber-500"
                >
                    Create a new account
                </button>
                <Button onClick={handleLogin}>Sign In</Button>
            </div>
        </div>
    );
}
