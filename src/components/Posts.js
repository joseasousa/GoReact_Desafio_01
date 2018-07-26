import React from 'react';
import Post from './Post';
import './posts.css';

const Posts = ({ data }) =>
  (
    <div className="container">
      {
          data.map(p =>
            <Post key={p.id} post={p} />)
      }
    </div>
  );

export default Posts;
