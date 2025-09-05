import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import Button from "../../components/shared/Button";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Call API
    localStorage.setItem("token", "mock-token");
    history.push("/home");
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />

        <Button type="submit">Login</Button>

        <Button type="button" variant="secondary" onClick={() => alert("Google Login TODO")}>
          Login with Google
        </Button>
      </form>

      <p className="text-center mt-4">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-blue-600">
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
