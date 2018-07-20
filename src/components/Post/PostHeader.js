import React from 'react';


const PostHeader = ({ data }) => (
  <div>
    <div>
      <img className="avatar" src={data.photo} alt={data.name} />
    </div>
    <div>
      <h3>{data.name}</h3>
      <strong>{data.create_at}</strong>
    </div>
  </div>
);
export default PostHeader;
