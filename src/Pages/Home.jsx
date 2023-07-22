import { useState } from "react";
import { Link } from "react-router-dom";

const getUser = () => {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
};

const Home = () => {
  const [user, setUser] = useState(getUser());

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      {user ? (
        <>
          <h4>
            Hello, {user.firstName} {user.lastName}
          </h4>
          <h5>{user.email}</h5>
          <button
            className="bg-orange-500 w-28 h-14 rounded-lg flex justify-center items-center"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        </>
      ) : (
        <Link
          to="/login"
          className="h-12 w-28 bg-zinc-800 text-white rounded-lg flex justify-center items-center"
        >
          LOGIN
        </Link>
      )}
    </>
  );
};

export default Home;
