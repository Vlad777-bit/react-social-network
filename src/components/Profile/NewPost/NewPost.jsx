import style from './NewPost.module.scss';

import Button from '../../UI/Button';

const NewPost = () => {
  const { newPost, title, input } = style;

  return (
    <section className={newPost}>
      <h3 className={title}>My posts</h3>
      <form>
        <textarea
          name=""
          className={input}
          placeholder="your news..."
        ></textarea>
        <Button />
      </form>
    </section>
  );
};

export default NewPost;
