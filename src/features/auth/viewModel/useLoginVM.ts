import { useState } from "react";
import { AuthController } from "../controller/LoginController";

import { useNavigate } from "react-router-dom";

export function useLoginVM() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      navigate("/home");
    } catch (error: any) {
      console.error("Login error full details:", error);
      if (error.response) {
        console.error("Login error response:", error.response);
        alert(
          `Login Failed: ${error.response.data?.msg || error.response.statusText}`,
        );
      } else {
        alert(error.message || "An unexpected error occurred");
      }
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
