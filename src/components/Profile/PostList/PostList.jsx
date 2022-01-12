import style from './PostList.module.scss';

const PostList = () => {
  const { posts, post, avatar, message } = style;

  return (
    <section className={posts}>
      <div className={post}>
        <div className={avatar}>
          <img
            src="https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504/avatarki.-1.jpg"
            alt="avatar"
          />
        </div>
        <p className={message}>Hey, why nobody love me?</p>
      </div>
      <div className={post}>
        <div className={avatar}>
          <img
            src="https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg"
            alt="avatar"
          />
        </div>
        <p className={message}>It's our new program! Hey!</p>
      </div>
    </section>
  );
};

export default PostList;