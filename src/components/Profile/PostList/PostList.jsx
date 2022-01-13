import style from './PostList.module.scss';
import Post from './Post/Post';

const PostList = () => {
  const { posts } = style;

  return (
    <section className={posts}>
      <Post body="Hey, why nobody love me?" />
      <Post body="Hey, how are you?" />
      <Post body="I like JavaScript!" />
    </section>
  );
};

export default PostList;
