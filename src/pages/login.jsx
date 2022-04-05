import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getTokens } from "../helpers/setAndRemoveToken";
import { checkAuth, login } from "../redux/actions/fetchActions";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {isAuth, isLoading} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    const { refreshToken } = getTokens();
    if (refreshToken) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  useEffect(() => {
    if (isAuth) {
      navigate(from, { replace: true });
    }
  }, [isAuth, navigate, from]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <section>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Вход</button>
      </form>
    </section>
  );
}

export default Login;
