// src/Posts.js
import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error: error };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.error("Component error:", error, info);
    alert(`An error occurred: ${error.message}\nComponent Stack: ${info.componentStack}`);
  }

  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const loadedPosts = data.map(post => new Post(post.id, post.title, post.body));
      this.setState({ posts: loadedPosts });
    } catch (error) {
      console.error("Error fetching posts:", error);
      this.setState({ error: error });
    }
  };

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <h1>Posts</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;