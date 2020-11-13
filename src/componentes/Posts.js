import React from 'react'
//import {jQuery as $} from './jquery';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading ...</h2>;
  }

  const handleToggle = async () => {
      /*const el = findDOMNode(this.refs.toggle);
      $(el).slideToggle();
      */
      alert('Servicio no disponible ...');
  };

  return <table className="table">
    {posts.map(post => (
      <tr>
        <td>{post.id}</td>
        <td>{post.eventBody.symbol}</td>
        <td>{post.labels}</td>
        <td>{post.timestamp}</td>
        <td>{post.status}</td>
        <td>{post.checked}</td>
        <td><input type="checkbox" checked data-toggle="toggle" onClick={handleToggle} /></td>
      </tr>
    ))}
    </table>;
};

export default Posts;
