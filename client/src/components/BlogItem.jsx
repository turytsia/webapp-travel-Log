import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
function Price() {
  return <div className="travel-item-type">Cheap</div>;
}
export default function BlogItem({ blog }) {
  return (
    <div className="travel-item list-item">
      <div
        className="travel-item-img"
        style={{
          backgroundImage: `url(http://localhost:5000/api/image/${blog.images[0]})`,
        }}
      >
        <Price />
      </div>
      <Link className="travel-item-inner" to={`/blog/${blog._id}`}>
        <h4 className="travel-item-title">
          <span>{blog.title}</span>
          <span className="travel-item-time">
            {" "}
            {moment(blog.createdAt).fromNow()}
          </span>
        </h4>
        <p className="travel-item-text">{blog.body.slice(0, 140)}...</p>
        <div className="travel-item-tags">
          {blog.tags.map((tag, i) => (
            <span key={i} className="tag-item">
              {tag}
            </span>
          ))}
        </div>
      </Link>
      <div className="travel-item-info">
        <span className="travel-item-comment">
          <i className="fas fa-comment-dots"></i>
          {blog.comments.length}
        </span>
        <span className="travel-item-like">
          <i className="far fa-heart"></i>
          {blog.likes}
        </span>
      </div>
    </div>
  );
}