import './Profile.scss';

const Profiile = () => {
  return (
    <main className="profile">
      <section className="profile__layar">
        <img
          src="https://www.arcturians.ca/wp-content/uploads/2018/12/2-the-earth-from-space-brightness-in-night_1200x224-300dpi.jpg"
          alt="layer"
        />
      </section>

      <section className="profile__info">
        <div className="profile__avatar">
          <img
            src="https://marvel-live.freetls.fastly.net/canvas/2018/11/c54027d5b6f94e00b677113ac8bcfae6?quality=95&fake=.png"
            alt="avatar"
          />
        </div>

        <div className="profile__description">
          <span className="title profile__name">Dmitry K.</span>

          <span>Date of Birth: 2 january</span>
          <span>City: Minsk</span>
          <span>Education: BSU '11</span>
          <span>
            Web Site: <a href="#!">https://it-kamasutra.com</a>
          </span>
        </div>
      </section>

      <section className="profile__post">
        <h3 className="title profile__header">My posts</h3>
        <form>
          <textarea
            name=""
            className="profile__input"
            placeholder="your news..."
          ></textarea>
          <button className="btn profile__btn">Send</button>
        </form>

        <div>
          <div>
            <img src="#!" alt="" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque,
            nihil?
          </p>
        </div>
      </section>
    </main>
  );
};

export default Profiile;
