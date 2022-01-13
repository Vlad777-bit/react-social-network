import { NavLink } from 'react-router-dom';
import style from './Navbar.module.scss';

const Navbar = () => {
  const { nav, menu, list, link, link_active } = style;

  return (
    <nav className={nav}>
      <ul className={menu}>
        <li className={list}>
          <NavLink
            to="/profile"
            className={(navLink) => (navLink.isActive ? link_active : link)}
          >
            Profile
          </NavLink>
        </li>
        <li className={list}>
          <NavLink
            to="/dialogs"
            className={(navLink) => (navLink.isActive ? link_active : link)}
          >
            Messages
          </NavLink>
        </li>
        <li className={list}>
          <NavLink
            to="/news"
            className={(navLink) => (navLink.isActive ? link_active : link)}
          >
            News
          </NavLink>
        </li>
        <li className={list}>
          <NavLink
            to="/music"
            className={(navLink) => (navLink.isActive ? link_active : link)}
          >
            Music
          </NavLink>
        </li>
        <li className={list}>
          <NavLink
            to="/settings"
            className={(navLink) => (navLink.isActive ? link_active : link)}
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
