import React, { CSSProperties, useState } from "react";
import PostForm from "./components/postForm";
import { Formik } from "formik";
import * as Yup from "yup";
import { mockedPosts, Post } from "./data";

function App() {
  const [posts] = useState<Post[]>(mockedPosts);
  return (
    <div>
      {/* <PostForm /> */}
      <main style={mainStyle}>
        {posts.map((post) => (
          <div style={cardStyle}>
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
