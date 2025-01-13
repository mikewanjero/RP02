import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";

export default function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function handleStateChange(event) {
    setEnteredBody(event.target.value);
  }

  function handleAuthorChange(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost
        onStateChange={handleStateChange}
        onAuthorChange={handleAuthorChange}
      />
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="John" body="Check out the full course" />
      </ul>
    </>
  );
}
