import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [selected, setSelected] = useState("book");

  let componentToShow;
  if (selected === "book") {
    componentToShow = <BookDetails />;
  } else if (selected === "blog") {
    componentToShow = <BlogDetails />;
  } else {
    componentToShow = <CourseDetails />;
  }

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1 style={{ color: '#333' }}>📚 Blogger App</h1>

      <div style={{ marginBottom: '15px' }}>
        <button onClick={() => setSelected("book")} style={buttonStyle}>Show Book</button>
        <button onClick={() => setSelected("blog")} style={buttonStyle}>Show Blog</button>
        <button onClick={() => setSelected("course")} style={buttonStyle}>Show Course</button>
      </div>

      {componentToShow}

      <p>
        You are viewing: <strong>{selected === "book" ? "Books" : selected === "blog" ? "Blogs" : "Courses"}</strong>
      </p>

      {selected === "course" && <p style={{ color: "green" }}>Enjoy learning your course!</p>}
    </div>
  );
}

const buttonStyle = {
  marginRight: '10px',
  padding: '8px 16px',
  backgroundColor: '#0073e6',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default App;