import { Link } from "react-router";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="App-header">
        HOME 🏠
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> | <Link to="/about">About</Link>
      </header>
    </div >
  );
}

export default HomePage;