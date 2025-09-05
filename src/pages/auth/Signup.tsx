import { useState } from "react";
import { IonPage, IonContent } from "@ionic/react";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    console.log("Signup with", { name, email, password });
  };

  return (
    <IonPage>
      <IonContent className="flex items-center justify-center h-full bg-gray-50">
        <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
          <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>

          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleSignup} className="w-full mt-4">
            Sign Up
          </Button>

          <div className="text-center mt-4">
            <a href="/login" className="text-blue-600 hover:underline">
              Already have an account? Log in
            </a>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
