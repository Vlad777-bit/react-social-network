import React from 'react';
// import style from './Profile.module.scss';

import Layer from './Layer/Layer';
import Info from './Info/Info';
import NewPost from './NewPost/NewPost';
import PostList from './PostList/PostList';

const Profile = () => {
  return (
    <div>
      <Layer />
      <Info />
      <NewPost />
      <PostList />
    </div>
  );
};

export default Profile;
