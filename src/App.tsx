import React, { CSSProperties, useImperativeHandle, useState } from "react";
import PostForm from "./components/postForm";

import { mockedPosts, Post } from "./data";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const handleSubmit = (post: Post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div>
      <PostForm onSubmit={handleSubmit} />
      <main style={mainStyle}>
        {posts.map((post) => (
          <div key={post.title} style={cardStyle}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>{post.author}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
const mainStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};
const cardStyle: CSSProperties = {
  background: "lightblue",
  padding: "1rem",
};

export default App;
