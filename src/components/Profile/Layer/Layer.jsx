import style from './Layer.module.scss';

const Layer = () => {
  const { Layer } = style;

  return (
    <section className={Layer}>
      <img
        src="https://www.arcturians.ca/wp-content/uploads/2018/12/2-the-earth-from-space-brightness-in-night_1200x224-300dpi.jpg"
        alt="layer"
      />
    </section>
  );
};

export default Layer;
