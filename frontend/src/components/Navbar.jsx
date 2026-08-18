function Navbar({ username, isLoggedIn, onLogout }) {
  return (
    <nav className="navbar">
      <h2>Codveda Full-Stack App</h2>
      {isLoggedIn && (
        <div className="navbar-right">
          <span>Welcome, {username}</span>
          <button onClick={onLogout}>Logout</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
