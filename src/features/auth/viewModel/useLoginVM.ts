import { useState } from "react";
import { AuthController } from "../controller/LoginController";

export function useLoginVM() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const controller = new AuthController();

  const submit = async () => {
    console.log("Submit button clicked");
    if (!username || !password) {
      alert("Username and password required");
      return;
    }

    setLoading(true);
    try {
      const result = await controller.login(username, password);
      console.log("Login success:", result);
      alert("Login Successful!");
    } catch (error: any) {
      console.error("Login error:", error);
      alert(error.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return {
    username,
    password,
    loading,
    setUsername,
    setPassword,
    submit,
  };
}
