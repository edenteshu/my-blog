import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import About from "./pages/About";
import Post from "./pages/Post";
import { posts as staticPosts } from "./data/posts";

function App() {
  const [posts, setPosts] = useState(staticPosts);

  const handlePostCreated = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-white">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home posts={posts} setPosts={setPosts} />
                  <About />
                  <Contact />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/create-post"
              element={<CreatePost onPostCreated={handlePostCreated} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/post/:title" element={<Post />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
