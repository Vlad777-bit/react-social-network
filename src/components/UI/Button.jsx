import style from './Button.module.scss';

const Button = () => {
  const { btn } = style;

  return <button className={btn}>Send</button>;
};

export default Button;
