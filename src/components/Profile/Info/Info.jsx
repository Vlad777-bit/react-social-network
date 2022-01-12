import style from './Info.module.scss';

const Info = () => {
  const { info, avatar, description, name } = style;

  return (
    <section className={info}>
      <div className={avatar}>
        <img
          src="https://marvel-live.freetls.fastly.net/canvas/2018/11/c54027d5b6f94e00b677113ac8bcfae6?quality=95&fake=.png"
          alt="avatar"
        />
      </div>

      <div className={description}>
        <span className={name}>Dmitry K.</span>

        <span>Date of Birth: 2 january</span>
        <span>City: Minsk</span>
        <span>Education: BSU '11</span>
        <span>
          Web Site:{' '}
          <a href="#!" target="_blank">
            https://it-kamasutra.com
          </a>
        </span>
      </div>
    </section>
  );
};

export default Info;
