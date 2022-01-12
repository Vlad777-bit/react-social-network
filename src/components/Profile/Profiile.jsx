import style from './Profile.module.scss';

import Layar from './Layar/Layar';
import Info from './Info/Info';
import NewPost from './NewPost/NewPost';
import PostList from './PostList/PostList';

const Profiile = () => {
  const { profile } = style;

  return (
    <main className={profile}>
      <Layar />
      <Info />
      <NewPost />
      <PostList />
    </main>
  );
};

export default Profiile;
