/* eslint-disable react/prop-types */
import styles from "./Post.module.css";

export default function Post(props) {
  return (
    <li className={styles.post}>
      <p className={styles.author}>{props.author}</p>
      <p className={styles.text}>{props.body}</p>
    </li>
  );
}
