import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Store/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = (e) => {
    e.preventDefault();
    let userCredentials = {
      email,
      password,
    };
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setEmail("");
        setpassword("");
        navigate("/");
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLoginEvent}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              required
              type="email"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              required
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-400"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {loading ? "Loading..." : "Login"}
          </button>
          {error&&(
            <div className="bg-red-500" role="alert">{error}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
