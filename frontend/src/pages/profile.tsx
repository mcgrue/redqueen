import { Link } from "react-router";

function ProfilePage() {
  return (
    <div className="ProfilePage">
      <header className="App-header">
        Profile Page

        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> | <Link to="/about">About</Link>
      </header>
    </div >
  );
}

export default ProfilePage;