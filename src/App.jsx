import { useState, useEffect } from "react";
import ChangeName from "./components/ChangeName";
import axios from "axios";
import "./App.css";
import http from "./lib/http";

function App() {
  let [posts, setPosts] = useState([]);
  let [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    getPosts();
    return () => {};
  }, []);

  async function getPosts() {
    const response = await http.get("/posts");
    setPosts(response.data);
    setFilteredPosts(response.data);
  }

  function changeSearchTerm(newValue) {
    const newPosts = posts.filter((post) => {
      return post.title.includes(newValue) || post.body.includes(newValue);
    });
    setFilteredPosts(newPosts);
  }

  return (
    <div>
      <div className="form">
        <ChangeName handleSetSearchTerm={changeSearchTerm} />
      </div>
      {filteredPosts.map((post, index) => {
        return (
          <div key={index} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
