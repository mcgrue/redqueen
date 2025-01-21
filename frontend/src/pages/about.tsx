
import { Link } from "react-router";

function AboutPage() {
  return (
    <div className="AboutPage">
      <header className="App-header">
        About Page
        <Link to="/">Home</Link> |
        <Link to="/profile">Profile</Link> |
        <Link to="/about">About</Link>
      </header>
    </div>
  );
}

export default AboutPage;