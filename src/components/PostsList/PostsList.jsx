/* eslint-disable react/prop-types */
import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import styles from "./PostsList.module.css";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function PostsList({ isPosting, onStopPost }) {
  const [posts, setPosts] = useState([]);

  function addPost(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPost}>
          <NewPost onAddPost={addPost} onCancel={onStopPost} />
        </Modal>
      ) : null}
      {posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : null}
      {posts.length === 0 ? (
        <p style={{ textAlign: "center" }}>No posts yet!</p>
      ) : null}
    </>
  );
}
