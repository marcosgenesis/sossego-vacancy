import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Post from '../../components/Post';
import { Container, PostsContainer } from './styles';

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get('/posts');
      setPosts(response.data);
    }
    loadPosts();
  }, []);

  return (
    <Container>
      <h1>Posts</h1>
      <PostsContainer>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        ))}
      </PostsContainer>
    </Container>
  );
}

export default Dashboard;
