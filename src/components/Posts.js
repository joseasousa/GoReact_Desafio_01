import React from 'react';
import Post from './Post';

const Posts = ({ data }) =>
  (
    <div>
      {
          data.map(p =>
            <Post key={p.id} post={p} />)
      }
    </div>
  );

export default Posts;
