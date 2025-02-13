/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import styles from "./PostsList.module.css";
import Modal from "../Modal/Modal";

export default function PostsList({ isPosting, onStopPost }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Function to fetch posts from the server - (In dummy-backend folder)
    async function fetchPosts() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/posts");
      const respData = await response.json();
      setPosts(respData.posts);
      setIsLoading(false);
    }

    fetchPosts();
  }, []);

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
      {/* Show modal to add new post */}
      {isPosting ? (
        <Modal onClose={onStopPost}>
          <NewPost onAddPost={addPost} onCancel={onStopPost} />
        </Modal>
      ) : null}
      {/* Show loading spinner */}
      {isLoading ? <p style={{ textAlign: "center" }}>Loading...</p> : null}
      {/* Display posts */}
      {!isLoading && posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : null}
      {/* Display message if no posts */}
      {!isLoading && posts.length === 0 ? (
        <p style={{ textAlign: "center" }}>No posts yet!</p>
      ) : null}
    </>
  );
}

// Infinite loop
// fetch("http://localhost:8080/posts",{
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
// }).then(response => {
//   response.json()
// }).then((data) => {
//   setPosts(data.posts);
// });
