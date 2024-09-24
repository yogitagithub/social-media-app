import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './post.css';

const Post = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [currentPage, setCurrentPage] = useState(1); 
    const [postsPerPage] = useState(5); 
    const [likes, setLikes] = useState({}); 
    const [followStatus, setFollowStatus] = useState({});

    const handleLikeClick = (postId) => {
        setLikes((prevLikes) => ({
          ...prevLikes,
          [postId]: (prevLikes[postId] || 0) + 1,
        }));
      };
    

      const handleFollowClick = (postId) => {
        setFollowStatus((prevStatus) => ({
            ...prevStatus,
            [postId]: 'following', // Change status to 'following'
        }));
    };

    const handleUnfollowClick = (postId) => {
      setFollowStatus((prevStatus) => {
          const newStatus = { ...prevStatus };
          delete newStatus[postId]; // Remove the postId from followStatus
          return newStatus;
      });
  };


    const fetchPosts = async () => {
        try {
          const response = await axios.get('http://localhost:8001/api/v1/post/getAll-post');
          if (response.data.success) {
            setPosts(response.data.post);
          } else {
            setError(response.data.message);
          }
        } catch (err) {
          setError('Error while fetching posts');
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchPosts();
      }, []);
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error}</p>;
    

      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    
      
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
     
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
        pageNumbers.push(i);
      }


      return (
        <div>

            <div style={{ marginLeft: '600px', marginTop: '20px'}}>
          <h2>Post Lists</h2>
          </div>

          <table border="1" width="100%" cellPadding="10">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Title</th>
                <th>Description</th>
                <th>Author</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.length > 0 ? (
                currentPosts.map((post, index) => (
                  <tr key={post._id}>
                    <td>{index + 1}</td>
                    <td>{post.title}</td>
                    <td>{post.description}</td>
                    <td>{post.author}</td>
                    <td>
                    
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <ThumbUpIcon style={{ cursor: 'pointer', color: 'blue',  marginRight: '8px' }}   
                       onClick={() => handleLikeClick(post._id)}/>

<span>{likes[post._id] || 0} Likes</span> 
{followStatus[post._id] === 'following' ? (
                                            <>
                                                <button style={{ marginLeft: '20px' }} onClick={() => handleUnfollowClick(post._id)}>Unfollow</button>
                                                <button style={{ marginLeft: '10px' }}>Following</button>
                                            </>
                                        ) : (
                                            <button style={{ marginLeft: '20px' }} onClick={() => handleFollowClick(post._id)}>Follow</button>
                                        )}

                      {/* <button style={{ marginLeft: '20px' }}>Follow</button> */}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No posts found</td>
                </tr>
              )}
            </tbody>
          </table>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            style={{
              margin: '0 5px',
              padding: '10px',
              backgroundColor: currentPage === number ? '#4CAF50' : '#f1f1f1',
              color: currentPage === number ? '#fff' : '#000',
              border: '1px solid #ddd',
              cursor: 'pointer',
            }}
          >
            {number}
          </button>
        ))}
      </div>
    
        </div>
   
);
};
export default Post;