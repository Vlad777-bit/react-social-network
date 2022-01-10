import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="#!" className="header__link">
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
