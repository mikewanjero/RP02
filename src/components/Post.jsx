/* eslint-disable react/prop-types */
export default function Post(props) {
  return (
    <div>
      <p>{props.author}</p>
      <p>{props.body}</p>
    </div>
  );
}
