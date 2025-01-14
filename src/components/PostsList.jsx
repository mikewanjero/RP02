/* eslint-disable react/prop-types */
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";
import Modal from "./Modal";

export default function PostsList({ isPosting, onStopPost }) {
  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPost}>
          <NewPost onCancel={onStopPost} />
        </Modal>
      ) : null}
      <ul className={styles.posts}>
        <Post author="John" body="Check out the full course" />
      </ul>
    </>
  );
}
