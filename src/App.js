/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Prueba tecnica <code>Ceptinel</code>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React, {useState, useEffect} from 'react';
import Posts from './componentes/Posts';
import Pagination from './componentes/Pagination';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      // si se accede como : http://localhost:3000/
      // const res = await axios.get('./ceptinel/data.json');

      // si se accede como : http://localhost:3000/ceptinel/
      const res = await axios.get('./data.json');
      console.log(res.data.events);
      setPosts(res.data.events);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Cambio de página
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className="text-primary mb-3">Centinel App</h1>
      <Posts posts={currentPost} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
};

export default App;
