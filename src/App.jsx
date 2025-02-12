import { useState } from "react";
import PostsList from "./components/PostsList/PostsList";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModal() {
    setModalIsVisible(true);
  }

  function hideModal() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModal} />
      <main>
        <PostsList isPosting={modalIsVisible} onStopPost={hideModal} />
      </main>
    </>
  );
}
export default App;
