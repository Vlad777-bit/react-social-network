import style from './Post.module.scss';

const Post = (props) => {
  const { post, avatar, message } = style;
  const { body} = props;

  return (
    <div className={post}>
      <div className={avatar}>
        <img
          src="https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504/avatarki.-1.jpg"
          alt="avatar"
        />
      </div>
      <p className={message}>{body}</p>
    </div>
  );
};

export default Post;
