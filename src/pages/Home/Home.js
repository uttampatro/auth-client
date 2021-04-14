import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

function Home() {
  const history = useHistory();
  // const [isAuthenticated, setIsAuthenticated] = useState(true)

  const goToLogin = () => {
    history.push("/login");
  };

  const goToRegister = () => {
    history.push("/register");
  };

  return (
    <div className="home">
      <h3>Home</h3>
      <div className="home_container">
        <button onClick={goToLogin} className="home_button">
          Login
        </button>
        <button onClick={goToRegister} className="home_button">
          Register
        </button>
      </div>
    </div>
  );
}

export default Home;
