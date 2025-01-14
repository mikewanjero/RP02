/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function handleStateChange(event) {
    setEnteredBody(event.target.value);
  }

  function handleAuthorChange(event) {
    setEnteredAuthor(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    console.log(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="body">Body</label>
        <textarea id="body" required rows={3} onChange={handleStateChange} />
      </p>
      <p>
        <label htmlFor="name">Author</label>
        <input type="text" id="name" required onChange={handleAuthorChange} />
      </p>
      <p className={classes.actions}>
        <button type="submit">Submit</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </p>
    </form>
  );
}

export default NewPost;
