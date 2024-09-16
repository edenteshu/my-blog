import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuth } from "../contexts/AuthContext";

const Home = ({ posts, setPosts }) => {
  const { user } = useAuth();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/posts");
      if (!response.ok) throw new Error("Failed to fetch posts");
      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, ...data]);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/posts/${postId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("Failed to delete the post");
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // Debugging: Verify if user and isAdmin are correct
  console.log("User data:", user);

  return (
    <section className="bg-white py-20 min-h-screen" id="home">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h1
          className="text-5xl font-bold text-center text-cyan-900 mb-12"
          data-aos="fade-up"
        >
          Blog Posts
        </h1>
        {posts.length === 0 && (
          <p className="text-center text-gray-500">No posts available</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              onDelete={user?.isAdmin ? () => handleDeletePost(post._id) : null} // Only pass delete handler if admin
              isAdmin={user?.isAdmin} // Check if user is admin
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
