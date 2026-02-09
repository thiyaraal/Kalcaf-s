import Button from "../../../shared/components/button/Button";
import { Checkbox } from "../../../shared/components/checkbox/Checkbox";
import AuthHeader from "../../../shared/components/header/AuthHeader";
import TextInput from "../../../shared/components/text_input/TextInput";
import { useLoginVM } from "../viewModel/useLoginVM";
import "./LoginScreen.css";
function LoginScreen() {
  const { username, password, loading, submit, setUsername, setPassword } =
    useLoginVM();

  return (
    <>
      <AuthHeader className="header-menu" title="Kalcaf's" subtitle="" />

      <div className="main-content">
        <div className="main-content-form">
          <div className="main-content-form-text">
            <h3 className="main-content-title">hello, Welcome back!</h3>
            <p className="main-content-subtitle">
              Sign in to see your favorite café menu and orders
            </p>
          </div>
          <div className="main-content-form">
            <TextInput
              label="Username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={setUsername}
            />
            <TextInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={setPassword}
            />
          </div>
          <div className="main-content-checkbox">
            <Checkbox
              id="remember"
              label="Remember me for 30 days"
              checked={false}
              onChange={() => {}}
            />
          </div>
          <Button
            variant="primary"
            className="main-content-button"
            label={loading ? "Loading..." : "Sign In"}
            onClick={submit}
            disabled={loading}
          />
        </div>
        <div className="main-content-image">
          <img
            src="https://media.dekoruma.com/article/2024/10/21094702/cafe-estetik-di-BSD.jpg?fit=300%2C225&ssl=1"
            alt="Cafe Interior"
          />
        </div>
      </div>
    </>
  );
}

export default LoginScreen;
