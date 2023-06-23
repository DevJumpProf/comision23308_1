import ShowPosts from "./components/ShowPosts";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowPosts/>} />
          <Route path="/create" element={<CreatePost/>} />
          <Route path="/edit/:id" element={<EditPost/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
