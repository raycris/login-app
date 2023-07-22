import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link
        to="/login"
        className="h-12 w-28 bg-zinc-800 text-white rounded-lg flex justify-center items-center"
      >
        LOGIN
      </Link>
    </>
  );
};

export default Home;
