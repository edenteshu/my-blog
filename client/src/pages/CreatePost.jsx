import React, { useState } from "react";

const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !content || !author) {
      setError("All fields are required.");
      return;
    }

    const newPost = {
      title,
      content,
      author,
      tags: tags.split(",").map((tag) => tag.trim()), // Convert tags to an array
    };

    try {
      const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || "An error occurred while creating the post");
        return;
      }

      const data = await response.json();
      onPostCreated(data); // Pass the new post to the parent component
      setSuccess("Post created successfully!");
      // Clear the form
      setTitle("");
      setContent("");
      setAuthor("");
      setTags("");
      setError("");
    } catch (err) {
      setError("An error occurred while creating the post: " + err.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Create New Post</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>}
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tags (comma separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-500 text-white  px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
