import React from 'react';
import './post.css';


const PostHeader = ({ data }) => (
  <div className="post-header">
    <div className="avatar">
      <img src={data.photo} alt={data.name} />
    </div>
    <div>
      <h3 className="name">{data.name}</h3>
      <span className="time">há {data.create_at} min</span>
    </div>
  </div>
);
export default PostHeader;
