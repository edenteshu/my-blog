import React, { useState } from "react";

const PostCard = ({ post, onDelete, isAdmin }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="bg-cyan-400 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl"
      data-aos="fade-up"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        {post.title}
      </h2>
      <p className="text-gray-700 mb-4">
        {isExpanded ? post.fullContent : `${post.content.substring(0, 100)}...`}{" "}
        {/* Fixed template literal */}
      </p>
      <button
        onClick={handleReadMore}
        className="text-blue-500 hover:text-blue-700 mb-4"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
      {isAdmin && onDelete && (
        <button onClick={onDelete} className="text-red-500 hover:text-red-700">
          Delete Post
        </button>
      )}
      <p className="text-sm text-gray-500 mt-2">
        By {post.author} on {new Date(post.date).toDateString()}
      </p>
      <div className="flex space-x-2 mt-4">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-500 rounded-full px-2 py-1 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
