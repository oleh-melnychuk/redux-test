import React from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { FetchedPosts } from "./components/FetchedPosts";



const App = () => {
  return (
    <div className="container pt-3">
      <PostForm />
      <div className="row pt-3">
        <div className="col">
          <Posts posts={[1,2,3]}/>
        </div>
        <div className="col">
          <FetchedPosts posts={[]} />
        </div>

      </div>
    </div>
  );
}

export default App;
