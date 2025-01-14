/* eslint-disable react/prop-types */
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

export default function PostsList({ isPosting, onStopPost }) {
  const [posts, setPosts] = useState([]);

  function addPost(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPost}>
          <NewPost onAddPost={addPost} onCancel={onStopPost} />
        </Modal>
      ) : null}
      <ul className={styles.posts}>
        <Post author="John" body="Check out the full course" />
      </ul>
    </>
  );
}
