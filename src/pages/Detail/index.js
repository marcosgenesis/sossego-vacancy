import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

import api from '../../services/api';
import {
  Container,
  Content,
  Title,
  Body,
  User,
  Comments,
  Comment,
} from './styles';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadPost() {
      try {
        setLoading(true);
        const responsePost = await api.get(`/posts/${id}`);
        const postItem = responsePost.data;
        const responseUser = await api.get(`/users/${postItem.userId}`);
        const userItem = responseUser.data;
        const responseComments = await api.get(`/posts/${id}/comments`);
        const commentsItem = responseComments.data;
        setPost(postItem);
        setComments(commentsItem);
        setUser(userItem);
        setLoading(false);
      } catch (error) {
        toast.error('Post not found');
      }
    }
    loadPost();
  }, []);
  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : (
        <Content>
          <Title>
            <p>{post.title}</p>
          </Title>
          <Body>
            <p>{post.body}</p>
          </Body>
          <User>
            <li id="userHeader">
              <h4>{user.name}</h4>
              <p>{user.username}</p>
            </li>
            <li>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </li>
          </User>
          <Comments>
            <div id="numberComments">
              <p>{comments.length} Comentários</p>
            </div>
            {comments.map((comment) => (
              <Comment>
                <h2>{comment.name}</h2>
                <p>{comment.body}</p>
                <p>{comment.email}</p>
              </Comment>
            ))}
          </Comments>
        </Content>
      )}
    </Container>
  );
}

export default Detail;
