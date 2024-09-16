import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import AOS from "aos";
import "aos/dist/aos.css";

const Post = () => {
  const { title } = useParams();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const post = posts.find(
    (p) => p.title.replace(/\s+/g, "-").toLowerCase() === title
  );

  if (!post) {
    return <p className="text-center text-red-500 text-xl">Post not found</p>;
  }

  return (
    <section className="bg-white py-20 min-h-screen" id="post">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h1
          className="text-5xl font-bold text-center text-gray-800 mb-12"
          data-aos="fade-up"
        >
          {post.title}
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up">
          <p className="text-gray-700 leading-relaxed mb-6">
            {post.fullContent || post.content}{" "}
          </p>
          <p className="text-sm text-gray-600 mt-4">
            By {post.author} on {new Date(post.date).toDateString()}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
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
      </div>
    </section>
  );
};

export default Post;
