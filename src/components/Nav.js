const Nav = () => {
  return (
    <nav className="main-nav">
      <div className="container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="logo-circles">
            <div></div>
            <div></div>
            <div></div>
            <span></span>
          </div>
          <h1 className="logo">
            Hamdi<span>RH</span>
          </h1>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
