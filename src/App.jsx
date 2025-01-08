import "./App.css";
import Post from "./components/Post";

function App() {
  return (
    <main>
      <Post author="Michael" body="Working with React.js" />
      <Post author="John" body="Check out the full course" />
    </main>
  );
}
export default App;
