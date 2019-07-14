import React, { Component } from 'react';
import request from 'axios';

import Pagination from "./components/Pagination";
/*
class AppContainer extends Component {
    constructor(){
        super();
            this.state = {
            users: []
        }
    }

    componentWillMount() {
        request
            .get("http://localhost:8080/api")
            .then((res) => {
                // const USERS = JSON.parse(res.data).users;
                const USERS = res.data.users;
                this.setState({
                    users: USERS
                })
                
            });
    }

    render() {
        let users = this.state.users.map((user, i) => {
            console.log("users->>", user);
            return <li key={i}>{user}</li>
        });
        return(
            <div>
                <h1>Mi Aplicación Modificada</h1>
                <ul>
                    { }
                </ul>
            </div>
        )
    }
}

export default AppContainer;

/*
import React, { useState, useEffect } from 'react';
import Posts from './components/Pagination/Post';
import Pagination from './components/Pagination/Pagination';
import axios from 'axios';
import './css/styles.css';

const AppContainer = () => {
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(10);

useEffect(() => {
  const fetchPosts = () => {
    setLoading(true);
    const res = axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(res.data);
    setLoading(false);
  };

  fetchPosts();
}, []);

// Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

// Change page
const paginate = pageNumber => setCurrentPage(pageNumber);

return (
    <div className='container mt-5'>
        <h1 className='text-primary mb-3'>My Blog</h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        />
    </div>
    );
};

export default AppContainer;
*/

export default Pagination;