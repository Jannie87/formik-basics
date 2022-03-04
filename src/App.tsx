import React, { CSSProperties, useImperativeHandle, useState } from "react";
import PostForm from "./components/postForm";
import { CreatePost, Post } from "./data";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post>();

  const handleCreateSubmit = (newPost: CreatePost) => {
    //Create an ID on the client since we dont communicate with databas.
    const post = { ...newPost, id: Math.random().toString() };
    setPosts([post, ...posts]);
  };

  const handleUpdateSubmit = (updatedPost: CreatePost) => {
    const post = { ...updatedPost, id: editingPost!.id };

    const copyPosts = [...posts];
    const index = posts.findIndex((post) => post.id === editingPost?.id);
    copyPosts.splice(index, 1, post);

    setPosts(copyPosts);
    setEditingPost(undefined);
  };

  const beginEdit = (post: Post) => {
    setEditingPost(post);
  };

  return (
    <div>
      <PostForm onSubmit={handleCreateSubmit} />
      <main style={mainStyle}>
        {posts.map((post) => {
          if (editingPost?.id === post.id) {
            return (
              <div key={post.id} style={cardStyle}>
                <PostForm defaultPost={post} onSubmit={handleUpdateSubmit} />
              </div>
            );
          }
          return (
            <div
              key={post.id}
              style={cardStyle}
              onClick={() => beginEdit(post)}
            >
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>{post.author}</p>
            </div>
          );
        })}
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
