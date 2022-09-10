import React, { useEffect } from 'react';

import { fetchPosts, IPost, selectAllPosts, selectPostsError, selectPostsStatus } from './postsSlice';
import { Container, PostHeader } from './style';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import PostsExcerpt from './PostsExcerpt';

const PostsList: React.FC = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector(selectAllPosts);
  const postsStatus = useAppSelector(selectPostsStatus);
  const postsError = useAppSelector(selectPostsError);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postsStatus === 'succeeded') {
    const orderedPosts = posts.slice().sort((a: IPost, b: IPost) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post: IPost) => <PostsExcerpt key={post.id} post={post} />);
  } else if (postsStatus === 'failed') {
    content = <p>{postsError}</p>;
  }

  return (
    <Container>
      <PostHeader>Posts</PostHeader>
      {content}
    </Container>
  );
};

export default PostsList;
