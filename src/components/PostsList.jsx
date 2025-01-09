import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";

export default function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post author="Michael" body="Working with React.js" />
        <Post author="John" body="Check out the full course" />
      </ul>
    </>
  );
}
