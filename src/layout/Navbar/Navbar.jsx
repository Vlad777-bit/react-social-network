import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        <li className="nav__list">
          <a href="#!" className="nav__link">
            Profile
          </a>
        </li>
        <li className="nav__list">
          <a href="#!" className="nav__link">
            Messages
          </a>
        </li>
        <li className="nav__list">
          <a href="#!" className="nav__link">
            News
          </a>
        </li>
        <li className="nav__list">
          <a href="#!" className="nav__link">
            Music
          </a>
        </li>
        <li className="nav__list">
          <a href="#!" className="nav__link">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
