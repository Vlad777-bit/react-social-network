import styles from './Navbar.module.scss';

const Navbar = () => {
  const { nav, menu, list, link } = styles;

  return (
    <nav className={nav}>
      <ul className={menu}>
        <li className={list}>
          <a href="#!" className={link}>
            Profile
          </a>
        </li>
        <li className={list}>
          <a href="#!" className={link}>
            Messages
          </a>
        </li>
        <li className={list}>
          <a href="#!" className={link}>
            News
          </a>
        </li>
        <li className={list}>
          <a href="#!" className={link}>
            Music
          </a>
        </li>
        <li className={list}>
          <a href="#!" className={link}>
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
