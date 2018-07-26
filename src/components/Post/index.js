import React from 'react';
import PostHeader from './PostHeader';
import './post.css';

const Post = ({ post }) => (
  <div className="post">
    <PostHeader data={post} />
    <div>
      <p>{post.post}</p>
    </div>
  </div>
);

export default Post;
