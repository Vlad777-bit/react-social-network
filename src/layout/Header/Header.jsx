import styles from './Header.module.scss';

const Header = () => {
  const { header, logo, link } = styles;

  return (
    <header className={header}>
      <div className={logo}>
        <a href="#!" className={link}>
          <img
            src="https://marvel-live.freetls.fastly.net/canvas/2018/11/6ffaa98a51d44357ad91edb25fc8349c?quality=95&fake=.png"
            alt="logo"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
